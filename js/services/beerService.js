app.factory('beerService', function(){
  var beers = [];

  var addBeer = function(newBeer){
    var beer = {
      name: newBeer.name,
      style: newBeer.style,
      abv: newBeer.abv,
      img: newBeer.image,
      rating: newBeer.rating
    }
    beers.push(beer);
  }
  var removeBeer = function(index){
    beers.splice(index, 1);
  }

  var sortBy = function(){
    beers.sort(function (a, b) {
      return a.rating - b.rating;
      });
  };

  return {
    beers: beers,
    addBeer: addBeer,
    removeBeer,
    sortBy
  };
});
