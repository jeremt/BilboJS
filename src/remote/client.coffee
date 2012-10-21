
keyMap =
	"esc": [27],
	"↑": [38, 90, 87],
	"↲": [13],
	"←": [37, 81, 65],
	"↓": [40, 83],
	"→": [39, 68]

now.sendKey = (key) ->
	if keyMap[key] isnt undefined
		for code in keyMap[key]
			for type in ["keydown", "keyup", "keypress"]
				e = $.Event type
				e.which = code
				e.keyCode = code
				$(document).trigger e