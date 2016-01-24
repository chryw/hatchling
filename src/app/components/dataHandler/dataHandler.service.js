(function() {
  'use strict';

  angular
      .module('hatchling')
      .service('dataHandler', dataHandler);

  /** @ngInject */
  function dataHandler($http) {
    var data = [];
    $http.get('../../data/content-main.json').success(function(jsonArray){
      data = jsonArray[0];
    });
    this.getData = getData;

    function getData() {
      return data;
    }
  }

})();
