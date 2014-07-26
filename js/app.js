

var app = angular.module('app', [
	"ngRoute",
	"appControlers"
]);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {


    $routeProvider.when('/', {
        templateUrl: 'partials/landing-page.html',
        controller: 'LandongPageCtrl'
      }).
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumePageCtrl'
      }).
      otherwise({redirectTo: '/'});

  	$locationProvider.html5Mode(true)
    $locationProvider.hashPrefix('!');
  }]);