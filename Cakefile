# module dependencies

{spawn, exec} = require "child_process"

# config

BIN = "app.coffee"

BUILD = "public/js/build.js"

SRC	= "coffee"
JS	= "public/js"

STYL	= "styl"
CSS 	= "public/css"

# utils

print = (str, color, bool = true) ->
	swatches =
		red			: "31m"
		green		: "32m"
		blue		: "36m"
		yellow	: "33m"

	if swatches[color]
		str = "\x1b[" + swatches[color] + str
	if bool
		str += " ✔\x1b[m"
	console.log str

output = (proc) ->
	proc.stdout.on "data", (data) -> 
		print data.toString().trim(), false
	proc.stderr.on "data", (data) ->
		print data.toString().trim(), 'red', false

# options

option "-q", "--quiet", "Don't display compile informations"

# tasks

minify_msg = "Minify your js file with require optimizer"

task "minify", minify_msg, (options) ->
	print minify_msg, "blue"

	minify = exec "./node_modules/requirejs/bin/r.js -o #{BUILD}"
	output minify if options["quiet"] is undefined

build_msg = "Build your project from coffee and stylus files to js and css"

task "build", build_msg, (options) ->
	print build_msg, "blue"

	# build and compile CoffeeScript
	coffee = spawn "coffee", ["-o", JS, "-clb", SRC]
	output coffee if options["quiet"] is undefined

	# build and compile Stylus
	stylus = spawn "stylus", [STYL, "-c", "-o", CSS]
	output stylus if options["quiet"] is undefined

watch_msg = "Watch coffee and stylus files"

task "watch", watch_msg, (options) ->
	print watch_msg, "blue"

	# watch and compile CoffeeScript
	coffee = spawn "coffee", ["-o", JS, "-clwb", SRC]
	output coffee if options["quiet"] is undefined

	# watch and compile Stylus
	stylus = spawn "stylus", [STYL, "-c", "-w", "-o", CSS]
	output stylus if options["quiet"] is undefined

server_msg = "Starts server using nodemon #{BIN}"

task "server", server_msg, (options) ->
	nodemon = spawn "nodemon"
	output nodemon

dev_msg = "Starts server with nodemon and watch files for changes"

task "dev", dev_msg, (options) ->
	print dev_msg, "blue"

	# watch files
	invoke "watch"

	# start nodemon server
	invoke "server"