angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pizzas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pizzas = [
    { id: 0, sabor: 'Caipira', valor: 33.99, img: 'pizza-1.jpg', descricao: 'Lorem Ipsum', indisponivel: false},
    { id: 1, sabor: 'Caipira', valor: 33.99, img: 'pizza-2.jpg', descricao: 'Lorem Ipsum', indisponivel: false},
    { id: 2, sabor: 'Caipira', valor: 33.99, img: 'pizza-3.jpg', descricao: 'Lorem Ipsum', indisponivel: false},
    { id: 3, sabor: 'Caipira', valor: 33.99, img: 'pizza-4.jpg', descricao: 'Lorem Ipsum', indisponivel: false}
  ];

  return {
    all: function() {
      return pizzas;
    },
    get: function(pizzaId) {
      // Simple index lookup
      return pizzas[pizzaId];
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


