angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Pizzas) {
	$scope.pizzas = Pizzas.all();
})

.controller('PizzaDetalheCtrl', function($scope, $stateParams, Pizzas) {
	
})

.controller('BebidasCtrl', function($scope, Bebidas) {
	$scope.bebidas = Bebidas.all();
})
