
angular.module('AlexsWebsite').config(function($routeProvider)
{
    $routeProvider.when('/',{ templateUrl: 'assets/partials/home.html', controller: 'HomeController' } ); 
     $routeProvider.when('/usertable',{ templateUrl: 'assets/partials/usertable.html', controller: 'OverviewController' } );
    $routeProvider.otherwise({ redirectTo: '/' });
});
