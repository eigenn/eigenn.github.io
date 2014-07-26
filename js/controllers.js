

var appControlers = angular.module('appControlers', []);

appControlers.controller('LandongPageCtrl', ['$scope', function($scope) {
  }]);

appControlers.controller('ResumePageCtrl', ['$scope', function($scope) {
  }]);


appControlers.controller('ExperienceSectionCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('content/experience.json').success(function (data) {
        $scope.experiences = data;
    });
}]);


appControlers.controller('SkillsSectionCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('content/skills.json').success(function (data) {
        $scope.skills = data;
    });
}]);

appControlers.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      $elm.on('click', function() {
        $("body").animate({scrollTop: $('#nav').position().top}, "slow");
      });
    }
  }
});