app.controller('MainCtrl', function($scope, beersService){

  beersService.getAll().then(function () {
    $scope.beers = beersService.beers;
  });

  $scope.brewry = beersService.beers;

  $scope.newBeer = {};

  $scope.addBeer = function(){
    beersService.addBeer($scope.newBeer);
  };

  $scope.removeBeer = function(index){
    beersService.removeBeer(index)
  };

  $scope.rating = ["1", "2", "3","4","5"];

  $scope.sortBy = function(){
    beersService.sortBy();
  };

});
