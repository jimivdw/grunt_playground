((angular) ->
    app = angular.module('CoffeeTestModule', [])
    app.config(()->
        square = (x) -> x*x
        window.console.log(square(8))    
    )
)(window.angular)

    