app.controller('MainCtrl', function($scope, beerService){
  $scope.brewry = beerService.beers;
  $scope.newBeer = {};
  $scope.addBeer = function(){
    beerService.addBeer($scope.newBeer);
  }
  $scope.removeBeer = function(index){
    beerService.removeBeer(index)
  }
  $scope.rating = ["1", "2", "3","4","5"];
  $scope.sortby = function(){
    
  }
});
