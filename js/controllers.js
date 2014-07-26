

var appControlers = angular.module('appControlers', []);

appControlers.controller('LandongPageCtrl', ['$scope', function($scope) {
  }]);

appControlers.controller('ResumePageCtrl', ['$scope', function($scope) {
  }]);


appControlers.controller('ExperienceSectionCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('content/experience.json').success(function (data) {
        $scope.experiences = data;
        $scope.template = "partials/resume/experience.html";
    });
}]);


appControlers.controller('SkillsSectionCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('content/skills.json').success(function (data) {
        $scope.skills = data;
        $scope.template = "partials//resume/skills.html";
    });
}]);