
angular.module('AlexsWebsite').controller('AppController', function($scope, $location)
{
    $scope.isLocation = function(location)
    {
        return $location.path() === location;
    };
    
    $scope.gotoHome = function()
     {
         $location.path('/');
     };
    
    $scope.gotoUsertable = function()
    {
        $location.path('/usertable');
    };
   
});
