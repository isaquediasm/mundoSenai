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


.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $ionicNavBarDelegate){
  
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