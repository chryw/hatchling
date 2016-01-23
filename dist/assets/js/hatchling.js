(function() {
    var app = angular.module('hatchling', []);

    //directives


    //controllers
    app.controller('ContentController', function($scope, $http) {
        $scope.test = "Angular is working!";
        $scope.content = {};
        $scope.repeatlist = [];
        $http.get('data/content.json').success(function(data){
            $scope.content = data[0];
            $scope.repeatlist = data[0].products;
        });
    });

})();