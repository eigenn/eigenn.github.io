


var mainEigennApp = angular.module('mainEigennApp', []);

mainEigennApp.controller('ExperienceSectionCtrl', function ($scope, $http) {
    $http.get('content/experience.json').success(function (data) {
        $scope.experiences = data;
    });
});


mainEigennApp.controller('SkillsSectionCtrl', function ($scope, $http) {
    $http.get('content/skills.json').success(function (data) {
        $scope.skills = data;
    });
});
