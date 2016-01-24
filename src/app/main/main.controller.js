(function() {
  'use strict';

  angular
    .module('hatchling')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453598456532;
    vm.showToastr = showToastr;
    vm.test = "Bunny!";

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
      getJson();
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/chryw/hatchling" target="_blank"><b>hatchling</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getJson(){
      vm.json = {};
      vm.repeatlist = [];
      $http.get('../../data/content-main.json').success(function(data){
        vm.json = data[0];
        vm.repeatlist = data[0].products;
      });
    }
  }
})();
