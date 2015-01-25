angular.module 'myapp', []
 
.controller 'DemoController', 
	class DemoController
		constructor: (@$location) ->
			@field = 'Field'
			@name = 'john'

		method: ->
			'Method'
 
		methodWithParam: (param) ->
			"Param: #{param}"
 
		accessFieldFromMethod: ->
			"Path: #{@$location.absUrl()}" 		