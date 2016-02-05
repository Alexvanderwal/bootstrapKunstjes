angular.module('AlexsWebsite',
[
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate' 
])

.config(function($locationProvider)
{
    $locationProvider.html5Mode(true);
    
});