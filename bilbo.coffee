
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
# console.log process
# os = require 'os'
# console.log 'OS: ', os.networkInterfaces()

ip = '127.0.0.1'

exec "ifconfig | grep 'inet'", (stderr, stdout) ->
	if stderr
		console.log stderr
	else
		line = stdout.split('\n')[2]
		if line
			ip = /inet addr:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/.exec(line)?[1]
			ip ?= '127.0.0.1'

# Express configuration

app.configure ->
	@locals.title = "BilboJS"
	@port = process.argv[2] ? 4242
	@set 'views', __dirname + '/views'
	@set 'view engine', 'jade'
	@use express.static __dirname + '/public'
	@use express.bodyParser()

# Utils

getMarkup = (path, cb) ->
	type = config.markup.split '.'
	type = type[type.length - 1]

	if path is undefined
		return cb new Error 'Path must be defined.'
	fs.readFile __dirname + '/' + path, (err, data) ->
		if err then return cb err
		str = data.toString()
		switch type
			when "html"
				cb null, str
			when "jade"
				fn = jade.compile str
				cb null, fn()
			when "md", "markdown"
				jsdom.env str, [zepto], (error, window) ->
					if error then return cb error
					steps = window.$('.step')
					for step in steps
						window.$(step).html md window.$(step).html()
					result = window.$('body').html()
					window.close()
					cb null, result
			else
				cb new TypeError "Invalid markup format."

getNbSlides = (path, cb) ->
	type = config.markup.split '.'
	type = type[type.length - 1]

	if path is undefined
		return cb new Error 'Path must be defined.'
	fs.readFile __dirname + '/' + path, (err, data) ->
		if err then return cb err
		str = data.toString()
		if type is "jade"
			str = jade.compile(str)()
		jsdom.env str, [zepto], (error, window) ->
			if error then return cb error
			cb null, window.$('.step').length

restrited = (req, res, next) ->
	if req.query.key is config.key or config.key is undefined
		next()
	else
		res.redirect '/'

# Routes

customKeys =
	key1: " "
	key2: " "
	key3: " "

## default page, contain the presentation
app.get '/', (req, res) ->
	getMarkup config.markup, (error, markup) ->
		if error then throw error
		getMarkup config.init, (err, init) ->
			if err then throw err
			res.render 'index',
				markup: markup
				init: init
				framework: config.framework

## template stylesheet
app.get '/pres.css', (req, res) ->
	if config.style isnt undefined
		res.sendfile __dirname + '/' + config.style
	else
		res.send ''

## info page, display ip address of the server
app.get '/info', (req, res) ->
	res.render 'info', url: "http://" + ip + ":4242"

## remote to control the presentation
app.get '/remote', restrited, (req, res) ->
	getNbSlides config.markup, (err, nb) ->
		if err then throw err
		res.render 'remote',
			keys: customKeys
			nbSlides: nb

## update custom keys
app.post '/keys', (req, res) ->
	customKeys = req.body
	res.redirect '/remote?key=' + config.key

# Handle sockets manipulations with nowjs

msg = """
	The power of the remote is going to
	end. The time has come... for the
	dominion of BilboJS!

"""

gandalf = """
                                        ,---.
                                        /    |
  The power of the remote is           /     |
  going to end. The time has          /      |
  come... for the dominion of        /       |
  BilboJS!                      ___,'        |
                              <  -'          :
                               `-.__..--'``-,_\\_
                                  |o/ <o>` :,.)_`>
                                  :/ `     ||/)
                                  (_.).__,-` |\
                                  /( `.``   `| :
                                  \'`-.)  `  ; ;
                                  | `       /-<
                                  |     `  /   `.
                  ,-_-..____     /|  `    :__..-'\
                 /,'-.__\\  ``-./ :`      ;       \
                 `\ `\  `\\  \ :  (   `  /  ,   `. \
                   \` \   \\   |  | `   :  :     .\ \
                    \ `\_  ))  :  ;     |  |      ): :
                   (`-.-'\ ||  |\ \   ` ;  ;       | |
                    \-_   `;;._   ( `  /  /_       | |
                     `-.-.// ,'`-._\__/_,'         ; |
                        \:: :     /     `     ,   /  |
                         || |    (        ,' /   /   |
                         ||                ,'   / SSt|

"""

server = app.listen app.port, ->
	console.log gandalf
	console.log "\n\t#{app.locals.title} is running on http://localhost:#{app.port}\n"

everyone = nowjs.initialize server

nowjs.on 'connect', ->
	console.log "client #{@user.clientId} connected."

nowjs.on 'disconnect', ->
	console.log "client #{@user.clientId} disconnected."

everyone.now.getKey = (key) ->
	everyone.now.sendKey key