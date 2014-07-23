


var mainEigennApp = angular.module('mainEigennApp', []);

mainEigennApp.controller('ExperienceSectionCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('content/experience.json').success(function (data) {
        $scope.experiences = data;
        $scope.template = "partials/experience.html";
    });
}]);


mainEigennApp.controller('SkillsSectionCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('content/skills.json').success(function (data) {
        $scope.skills = data;
        $scope.template = "partials/skills.html";
    });
}]);
