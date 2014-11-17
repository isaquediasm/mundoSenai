angular.module('cardapio', ['ionic'])

.controller('MainCtrl', function($scope){
  $scope.pizzas = 
  [{
    id: 1, 
    sabor: 'Atum', 
    valor: 33.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-1.jpg'
  },
  {
    id: 2, 
    sabor: '4 Pizzas', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-2.jpg'
  }];
  
})