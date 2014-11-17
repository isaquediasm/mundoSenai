angular.module('app.controllers', [])

.controller('MainCtrl', function($scope , $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $ionicNavBarDelegate, Pizzas) {
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

  $scope.pizzas = Pizzas.all();

  
})

.controller('PizzasCtrl', function($scope, $stateParams, $ionicNavBarDelegate, Pizzas, Utils) {

  var hoje = new Date();
  var dia = hoje.getDate();
  var mes = hoje.getMonth()+1;
  var ano = hoje.getFullYear();
  var dataFinal = dia + "/" + mes + "/" + ano;


  $scope.pizzaId = $stateParams.pizzaId;
  $scope.pizza = Pizzas.get($scope.pizzaId);

   $scope.avaliarPizza = function(valor) {
    $scope.pizza.nota = valor;
  }

  $scope.coment = {
    data: dataFinal
  };

  $scope.cadastraComent = function(item) {
    Utils.showLoading();
    $scope.pizza.comentarios.push(item);
    Utils.hideLoading();
    $scope.coment = "";
  }
});
