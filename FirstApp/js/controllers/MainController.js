app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'my name is Shiqi Zhang'; 
  $scope.promo = 'my phone is 555-5555';

  /*In the controller, 
  you used an object to group together 
  related data about a product. 

  Then in the view, 
  you used dot notation to display the values.
  */
  $scope.product=[
    { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg' 
    }, 
    { 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/program-or-be-programmed.jpg' 
    } 
  ]
}]);