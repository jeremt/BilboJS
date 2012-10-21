_getKey = ->
	key = $(@).html()
	if key and key isnt ' '
		now.getKey key

$('#key-map > button').on "click", _getKey
$('#key-map > button').on "tap", _getKey