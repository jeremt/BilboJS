
# Dashboard display some info about the pres
# - the running time
# - the running time of the current slide
# - the current slide index

class Dashboard

	_slide = 1
	_max = null
	_time = 0
	_timeSlide = 0

	constructor: ->
		_max = $('#remote > hgroup > h3').text().split('/')[1]
		console.log _max

	_digits = (num) ->
		if num < 10 then '0' + num else num

	_display = (num) ->
		m = ~~(num / 60)
		s = ~~(num % 60)
		_digits m + ':' + _digits s

	prev: ->
		_timeSlide = 0
		_slide--
		if _slide < 1
			_slide = _max

	next: ->
		_timeSlide = 0
		_slide++
		if _slide > _max
			_slide = 1

	step: ->
		_time++
		_timeSlide++
		$('#remote > hgroup > h1').text _display _time
		$('#remote > hgroup > h2').text _display _timeSlide
		$('#remote > hgroup > h3').text _slide + '/' + _max
	run: ->
		setInterval @step, 1000

dashboard = new Dashboard

dashboard.run()

# Send the command to the server

getKey = ->
	key = $(@).html()
	switch key
		when '→', '↓'
			dashboard.next()
		when '←', '↑'
			dashboard.prev()
	if key and key isnt ' '
		now.getKey key

evt = if 'touchstart' in document then 'tap' else 'click'
$('#key-map > button').on evt, getKey

# Add fluid grid design

grid = ->
	winWidth = document.body.clientWidth
	winHeight = window.innerHeight
	btnWidth = winWidth / 3 - 6
	btnHeight = (winHeight - 100) / 3 - 6

	$('body').css 'overflow', 'hidden'
	$('.remote-page').css
		width: winWidth
		height: winHeight
	$('#key-map').css
		position: 'absolute'
		bottom: 0
		width: winWidth
		height: winHeight - 100
	$('#key-map > button').css
		width: btnWidth
		height: btnHeight
		margin: 2
	$('#key-map > button:last-child').css margin: 0

$ grid
$('body').on 'change', grid
$(window).on 'resize', grid

# Show/hide options

options = $ '#options'
remote = $ '#remote'

optionBtn = $ '#option-btn'
closeBtn = $ '#close-btn'

toRemote = ->
	options.removeClass('visible').addClass 'hidden'
	remote.removeClass('hidden').addClass 'visible'
	optionBtn.show()
	closeBtn.hide()

toOption = ->
	options.removeClass('hidden').addClass 'visible'
	remote.removeClass('visible').addClass 'hidden'
	closeBtn.show()
	optionBtn.hide()

optionBtn.click toOption
closeBtn.click toRemote
$('#save > button').click toRemote