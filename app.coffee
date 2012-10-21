
# Module dependencies

express = require 'express'
nowjs 	= require 'now'
fs 			= require 'fs'
jade 		= require 'jade'
md 			= require('node-markdown').Markdown
jsdom 	= require 'jsdom'
zepto 	= __dirname + "/public/js/libs/zepto.js"
exec 		= require('child_process').exec
config 	= require './config'

# Init Express

app = express()

# Get the ip address of the server

ip = '127.0.0.1'

exec "ifconfig | grep 'inet'", (stderr, stdout) ->
	if stderr
		console.log stderr
	else
		ip = /inet addr:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/.exec(stdout.split('\n')[2])[1]

# Express configuration

app.configure ->
	@locals.title = "BilboJS"
	@port = process.argv[2] ? 4242
	@set 'views', __dirname + '/views'
	@set 'view engine', 'jade'
	@use express.static __dirname + '/public'

# Utils

getMarkup = (path, cb) ->
	type = config.markup.split '.'
	type = type[type.length - 1]

	if path is undefined
		throw new Error 'Path must be defined.'
	fs.readFile __dirname + '/' + path, (err, data) ->
		if err then throw err
		str = data.toString()
		switch type
			when "html"
				cb str
			when "jade"
				fn = jade.compile str
				cb fn()
			when "md", "markdown"
				jsdom.env str, [zepto], (error, window) ->
					if error then throw error
					steps = window.$('.step')
					for step in steps
						window.$(step).html md window.$(step).html()
					result = window.$('body').html()
					window.close()
					cb result
			else
				throw new TypeError "Invalid markup format."

restrited = (req, res, next) ->
	if req.query.key is config.key or config.key is undefined
		next()
	res.redirect '/'

# Routes

app.get '/', (req, res) ->
	getMarkup config.markup, (markup) ->
		res.render 'index',
			markup: markup
			framework: config.framework

## send the template stylesheet
app.get '/pres.css', (req, res) ->
	if config.style isnt undefined
		res.sendfile __dirname + '/' + config.style
	else
		res.send ''

app.get '/info', (req, res) ->
	res.render 'info', url: "http://" + ip + ":4242"

app.get '/remote', restrited, (req, res) ->
	res.render 'remote'

# Handle sockets manipulations with nowjs

server = app.listen app.port, ->
	console.log "#{app.locals.title} app is running on #{app.port} :)"

everyone = nowjs.initialize server

nowjs.on 'connect', ->
	console.log "client #{@user.clientId} connected."

nowjs.on 'disconnect', ->
	console.log "client #{@user.clientId} disconnected."

everyone.now.getKey = (key) ->
	everyone.now.sendKey key