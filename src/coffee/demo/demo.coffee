((angular) ->
    app = angular.module('CoffeeTestModule')
    app.config(()->
        myDouble = (x) -> 2*x
        window.console.log(myDouble(8))    
    )
)(window.angular)

    