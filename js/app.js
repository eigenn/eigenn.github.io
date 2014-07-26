

var app = angular.module('app', [
	"ngRoute",
  "ui.router",
  "ngAnimate",
	"appControlers"

]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider.state('home', {
        url: "/",
        templateUrl: "partials/home.html",
        controller: "LandongPageCtrl"
      })
      .state('about', {
          url: "",
          templateUrl: "partials/resume/about.html",
          controller: "ResumePageCtrl"
      })
      .state('skills', {
          url: "",
          templateUrl: 'partials/resume/skills.html',
          controller: "SkillsSectionCtrl"
      })
      .state('experience', {
          url: "",
          templateUrl: 'partials/resume/experience.html',
          controller: "ExperienceSectionCtrl"
      })
      .state('education', {
          url: "",
          templateUrl: 'partials/resume/education.html',
      })
      .state('social', { 
          url: "",
          templateUrl: 'partials/resume/social.html',
      });
    $urlRouterProvider.otherwise("/");

  	$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }]);