angular.module('cardapio', ['ionic'])

.controller('MainCtrl', function($scope){
  $scope.pizzas = 
  {
    id: 1, 
    sabor: 'Atum', 
    valor: 33.99, 
    descricao: 'Lorem Ipsum'
  }
  
})