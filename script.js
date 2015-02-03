var tally = angular.module('tally', ['ngRoute']);

//ROUTING
tally.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    .when('/quiz/:question', {
        templateUrl : 'pages/quiz.html',
        controller  : 'quizController'
    })

    .when('/subjects', {
        templateUrl : 'pages/subjects.html',
        controller  : 'subjectsController'
    })

    .when('/settings', {
        templateUrl : 'pages/settings.html',
        controller  : 'settingsController'
    })

    .when('/results', {
        templateUrl : 'pages/results.html',
        controller  : 'resultsController'
    })

    .otherwise({ redirectTo: '/' });
});
