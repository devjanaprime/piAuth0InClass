console.log( 'js' );

var myApp = angular.module( 'myApp', [] );

// controller
myApp.controller( 'authController', [ '$scope', '$http', function( $scope, $http){
  console.log( 'NG!' );
  // review example for 2-way bind expressions
  $scope.exampleThing = 'I am an example thing!!!'

  $scope.toggleShowStuff = function(){
    $scope.showStuff = !$scope.showStuff;
  }
}]);
