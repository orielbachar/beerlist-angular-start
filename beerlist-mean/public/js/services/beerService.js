app.factory('beersService', ['$http', function ($http) {
  var beerService = {
      beers: [],

      postAll: function (hadas){
        var that = this;
        return $http.post('/beers', hadas).success(function(result){
          that.beers.push(result);
          angular.copy(result, that.beers[that.beers.length]);

        });
      },

      addBeer: function(newBeer){
      var beer = {
        name: newBeer.name,
        style: newBeer.style,
        abv: newBeer.abv,
        image_url: newBeer.image,
        rating: newBeer.rating
      };

       this.postAll(beer);
    },

    removeBeer: function(index){
      var that = this;
      return $http.delete('/beers/' + this.beers[index]._id).success(function(data){
        console.log(data);
        that.beers.splice(index, 1);
      });
    },

    sortBy: function(){
        this.beers.sort(function (a, b) {
        return a.rating - b.rating;
        })
    }
  };

  beerService.getAll = function () {
    return $http.get('/beers').success(function (data) {
      // this copies the response posts to the client side
      // 'beers' under 'beerService'
        angular.copy(data, beerService.beers);
    });
  };

  return beerService;
}]);
