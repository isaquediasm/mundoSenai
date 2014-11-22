angular.module('cardapio', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })

    .state('pizza', {
      url: '/pizza/:pizzaId',
      templateUrl: "templates/pizza.html",
      controller: "PizzasCtrl"
    })

  $urlRouterProvider.otherwise("app");
})

.factory('PizzasFactory', function() {

  var pizzas = [{
    id: 0, 
    sabor: 'Atum', 
    valor: 33.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-1.jpg',
    nota: 0,
    comentarios: 
    [
      {
        autor: 'Isaque Dias',
        email: 'isaquediasm@gmail.com',
        comentario: 'Essa pizza é boa pakas, mano!'
      }
    ]
  },
  {
    id: 1, 
    sabor: '4 Queijos', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-2.jpg',
    nota: 0,
    comentarios: 
    [
      {
        autor: 'Isaque Dias',
        email: 'isaquediasm@gmail.com',
        comentario: 'Essa pizza é boa pakas, mano!'
      }
    ]
  }];
  

  return {
    all: function() {
      return pizzas;
    },
    get: function(index) {
      return pizzas[index];
    },
    avaliar : function(nota,index) {
      pizzas[index].nota = nota;
    },
    comentar : function(comentario,index) {
      pizzas[index].comentarios.push(comentario);
    }
  }
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $ionicNavBarDelegate, PizzasFactory){
  
  $scope.pizzas = PizzasFactory.all();
  
  /* 
      Funções responsáveis pela manipulação do slide do ionic.
  */

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
 $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };

})

.controller('PizzasCtrl', function($scope, $stateParams, $ionicNavBarDelegate, PizzasFactory) {

  $scope.pizzaId = $stateParams.pizzaId;
  $scope.pizza = PizzasFactory.get($scope.pizzaId);
  $scope.coment = {};

  $scope.avaliar = function(nota) {
    PizzasFactory.avaliar(nota,$scope.pizzaId);
  }

  $scope.comentar = function(comentario) {
    PizzasFactory.comentar(comentario,$scope.pizzaId);
    $scope.coment = {};
  }

})


