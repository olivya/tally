var tally = angular.module('tally', ['ngRoute']);

//ROUTING
tally.config(function($routeProvider) {
	$routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    .when('/subjects', {
        templateUrl : 'pages/subjects.html',
        controller  : 'subjectsController'
    })

    .when('/settings', {
        templateUrl : 'pages/settings.html',
        controller  : 'settingsController'
    })

   	.when('/q1', {
        templateUrl : 'pages/q1.html',
        controller  : 'q1Controller'
    })

    .when('/q2', {
        templateUrl : 'pages/q2.html',
        controller  : 'q2Controller'
    })

    .when('/results', {
        templateUrl : 'pages/results.html',
        controller  : 'resultsController'
    })
    .otherwise({ redirectTo: '/' });
});

//CONTROLLERS
//Put into their own .js files
tally.controller('mainController', function($scope) {
	$scope.message = 'Tally is a trivia app.';
});

tally.controller('subjectsController', function($scope) {
	$scope.message = 'List of subjects pertaining to different question banks will go here!';
});

tally.controller('settingsController', function($scope) {
	$scope.message = "Change your settings here!";
});

tally.controller('q1Controller', function($scope) {
	$scope.message = 'Options will go here...';
});

tally.controller('q2Controller', function($scope) {
	$scope.message = "Options.";
});

tally.controller('resultsController', function($scope) {
	$scope.message = "Here's how you did...";
	$scope.score = "Your score.";
});




