(function() {
  'use strict';

  function MovieService($http, $log) {

    var service = {};

    service.movie = []; // MovieService.movie = [];

    /**
     * Get Movie
     */
    service.getMovie = function () {

      var key = '4295853c9d4f3674b4ed65459595b15f';

      return $http.get('https://api.themoviedb.org/3/movie/popular', {
          params:{
            api_key: key
          }
        })
        .success(function (data) {
          service.media = data;
        })
        .error(function () {
          console.log('error');
        });
    };

    return service;

  }

  angular.module('services.movie', [])
    .factory('MovieService', MovieService);
})();
