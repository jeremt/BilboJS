# init infos

currentSlide = 1
currentTime = 0
currentSlideTime = 0

# send the command to the server

getKey = ->
	key = $(@).html()
	switch key
		when '→', '↓'
			currentSlide++
			currentSlideTime = 0
		when '←', '↑'
			currentSlide--
			currentSlideTime = 0
	if key and key isnt ' '
		now.getKey key

$('#key-map > button').on (if 'touchstart' in document then 'tap' else 'click'), getKey

# add fluid grid design

grid = ->
	winWidth = document.body.clientWidth
	winHeight = window.innerHeight
	size = winHeight - winHeight / 3
	if winWidth > size
		winWidth = size
	btnSize = winWidth / 3 - 6

	$('body').css 'overflow', 'hidden'
	$('.remote-page').css
		width: winWidth
		height: winHeight
	$('#key-map').css
		position: 'absolute'
		bottom: 0
		width: winWidth
		height: winWidth
	$('#key-map > button').css
		width: btnSize
		height: btnSize
		margin: 2
	$('#key-map > button:last-child').css margin: 0

$ grid
$('body').on 'change', grid
$(window).on 'resize', grid

# add some info about the presentations

displayDigit = (num) ->
	if num < 10 then '0' + num else num

displayTime = (num) ->
	m = ~~(num / 60)
	s = ~~(num % 60)
	displayDigit(m) + ':' + displayDigit(s)

display = ->
	currentTime++
	currentSlideTime++
	$('#remote > h1').text displayTime currentTime
	$('#remote > h2').text displayTime currentSlideTime
	$('#remote > h3').text 'slide ' + currentSlide

setInterval display, 1000

options = $ '#options'
remote = $ '#remote'

optionBtn = $ '#option-btn'
closeBtn = $ '#close-btn'

toRemote = ->
	options.hide()
	optionBtn.show()
	remote.show()
	closeBtn.hide()

optionBtn.click ->
	options.show()
	remote.hide()
	closeBtn.show()
	optionBtn.hide()

$('#save > button').click toRemote
closeBtn.click toRemote

$('#options > select').on 'change', ->
	val = @[@.selectedIndex].value
	selector = '#' + $(@).prop('id').split('-')[1]
	$(selector).html val