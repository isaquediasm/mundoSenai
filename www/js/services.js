angular.module('app.services', [])

.factory('Pizzas', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pizzas = [
    { 
      id: 1, 
      sabor: 'Caipira', 
      valor: 33.99, 
      img: 'pizza-1.jpg', 
      descricao: 'Lorem Ipsum', 
      indisponivel: false, 
      nota: 0,
      comentarios: [
        {
          id: 1,
          autor: 'Isaque Dias',
          email: 'isaquediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        },
        {
          id: 2,
          autor: 'Filipe Dias',
          email: 'filipediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        }
      ]
    },
    { 
      id: 2, 
      sabor: 'Calabresa', 
      valor: 33.99, 
      img: 'pizza-2.jpg', 
      descricao: 'Lorem Ipsum', 
      indisponivel: false, 
      nota: 0,
      comentarios: [
        {
          id: 1,
          autor: 'Isaque Dias',
          email: 'isaquediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        },
        {
          id: 2,
          autor: 'Filipe Dias',
          email: 'filipediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        }
      ]
    },
    { 
      id: 3, 
      sabor: 'Atum', 
      valor: 33.99, 
      img: 'pizza-3.jpg', 
      descricao: 'Lorem Ipsum', 
      indisponivel: false, 
      nota: 0,
      comentarios: [
        {
          id: 1,
          autor: 'Isaque Dias',
          email: 'isaquediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        },
        {
          id: 2,
          autor: 'Filipe Dias',
          email: 'filipediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        }
      ]
    },
    { 
      id: 4, 
      sabor: '4 Queijos', 
      valor: 33.99, 
      img: 'pizza-4.jpg', 
      descricao: 'Lorem Ipsum', 
      indisponivel: false, 
      nota: 0,
      comentarios: 
      [
        {
          id: 1,
          autor: 'Isaque Dias',
          email: 'isaquediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
          
        },
        {
          id: 2,
          autor: 'Filipe Dias',
          email: 'filipediasm@gmail.com',
          data: '14/11/2014',
          comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
        }
      ]
    }
  ];

  return {
    all: function() {
      return pizzas;
    },
    get: function(pizzaId) {
      // Simple index lookup
      for (var i=0;i<=pizzas.length;i++) {
        if (pizzas[i].id == pizzaId) {
          return pizzas[i];
        }
      }
      return false;
    }
  }
})

.factory('Bebidas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bebidas = [
    { id: 0, sabor: 'Caipira', valor: 33.99, img: 'pizza-1.jpg', descricao: 'Lorem Ipsum', indisponivel: false},
    { id: 1, sabor: 'Caipira', valor: 33.99, img: 'pizza-2.jpg', descricao: 'Lorem Ipsum', indisponivel: false},
    { id: 2, sabor: 'Caipira', valor: 33.99, img: 'pizza-3.jpg', descricao: 'Lorem Ipsum', indisponivel: false},
    { id: 3, sabor: 'Caipira', valor: 33.99, img: 'pizza-4.jpg', descricao: 'Lorem Ipsum', indisponivel: false}
  ];

  return {
    all: function() {
      return bebidas;
    },
    get: function(bebidaId) {
      // Simple index lookup
      return bebidas[bebidaId];
    }
  }
})

.factory('Utils', function($ionicLoading, $timeout) {

  return {
    // Método para mostrar o ícone de carregamento.
    showLoading: function() {
      this.loadingIndicator = $ionicLoading.show({
      content: '<i class="icon ion-ios7-reloading"></i>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 5  // If the delay is too fast and you also change states, while the loader is showing, you can get flashing behavior
      }); 
    },

    hideLoading: function() {
      // Hide the loadingIndicator 1500 ms later
      $timeout(function(){
        $ionicLoading.hide();
      }, 500); 
    }
  }

  

 
})