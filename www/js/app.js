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
  },
  {
    id: 2, 
    sabor: 'Calabresa', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-3.jpg',
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
    id: 3, 
    sabor: 'Portuguesa', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-4.jpg',
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
    id: 4, 
    sabor: 'Sertaneja', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-5.jpg',
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
    id: 5, 
    sabor: 'Baidu', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-6.jpg',
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
    id: 6, 
    sabor: 'Avast', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-7.jpg',
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
    id: 7, 
    sabor: 'AVG', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-8.jpg',
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
    id: 8, 
    sabor: 'Avira', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/pizza-9.jpg',
    nota: 0,
    comentarios: 
    [
      {
        autor: 'Isaque Dias',
        email: 'isaquediasm@gmail.com',
        comentario: 'Essa pizza é boa pakas, mano!'
      }
    ]
  }

  ];
  
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

.factory('BebidasFactory', function() {

  var bebidas = [{
    id: 0, 
    nome: 'Coca-Cola', 
    valor: 33.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/bebida-coca.jpg'
  },
  {
    id: 1, 
    nome: 'Cerveja', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/bebida-cerveja.jpg'
  },
  {
    id: 2, 
    nome: 'Suco', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/bebida-suco.jpg'
  },
  {
    id: 3, 
    nome: 'Champagne', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/bebida-champagne.jpg'
  },
  {
    id: 4, 
    nome: 'Vinho', 
    valor: 32.99, 
    descricao: 'Lorem Ipsum',
    img: 'img/bebida-vinho.jpg'
  }
  ];
  

  return {
    all: function() {
      return bebidas;
    }
  }
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $ionicNavBarDelegate, PizzasFactory, BebidasFactory){
  
  $scope.pizzas = PizzasFactory.all();
  $scope.bebidas = BebidasFactory.all();
  
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


