
angular.module('AlexsWebsite').config(function($routeProvider)
{
    $routeProvider.when('/', { templateUrl: 'assets/partials/home.html', controller: 'HomeController' });

    
    $routeProvider.otherwise({ redirectTo: '/' });
});
