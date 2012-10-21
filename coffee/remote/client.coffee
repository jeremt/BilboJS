keyMap = {}

keyMap['esc'] = [27]
keyMap['↑'] = [38, 90, 87]
keyMap['↲'] = [13]
keyMap['←'] = [37, 81, 65]
keyMap['↓'] = [40, 83]
keyMap['→'] = [39, 68]
keyMap['⌫'] = [8]
keyMap['⇥'] = [9]
keyMap['↩'] = [13]
keyMap['space'] = [32]
keyMap['↖'] = [33]
keyMap['↘'] = [34]
keyMap['⇟'] = [35]
keyMap['⇞'] = [36]
keyMap['insert'] = [45]
keyMap['*'] = [106]
keyMap['+'] = [107]
keyMap['-'] = [109]
keyMap[';'] = [186]
keyMap['='] = [187]
keyMap[','] = [188]
keyMap['.'] = [190]
keyMap['/'] = [191]
keyMap['`'] = [192]
keyMap['['] = [219]
keyMap['\\'] = [220]
keyMap[']'] = [221]
keyMap['\''] = [222]

#letters
i = 64
while ++i < 91
	keyMap[String.fromCharCode(i)] = [i]

#numbers
i = 47
n = 0
while ++i < 58
	keyMap[n] = [i, i + 48]
	++n

now.sendKey = (key) ->
	if keyMap[key] isnt undefined
		for code in keyMap[key]
			for type in ["keydown", "keyup", "keypress"]
				e = $.Event type
				e.which = code
				e.keyCode = code
				$(document).trigger e