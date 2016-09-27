console.log( 'js' );

var myApp = angular.module( 'myApp', [] );
var lock = Auth0Lock( 'FzlbLwW024XmqaSV8OjpkObvSEJUbOvl', 'devjanaprime.auth0.com' );

// controller
myApp.controller( 'authController', [ '$scope', '$http', function( $scope, $http){
  console.log( 'NG!' );
  // review example for 2-way bind expressions
  $scope.exampleThing = 'I am an example thing!!!'

  $scope.logIn = function(){
    console.log( 'in logIn' );
    lock.show( function( err, profile, token ){
      if( err ){
        console.log( 'error:', err );
      }
      else{
        console.log( 'Auth0 success, Profile: ', profile );
      }
    }); // end lock
  }; // end logIn

  $scope.toggleShowStuff = function(){
    $scope.showStuff = !$scope.showStuff;
  }
}]);
