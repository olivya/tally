var tally = angular.module('tally', ['ngRoute']);

//ROUTING
tally.config(function ($routeProvider,$locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

     .when('/questions', {
        templateUrl : 'pages/questions.html',
        controller  : 'questionsController'
    })

    .when('/help', {
        templateUrl : 'pages/help.html',
        controller  : 'helpController'
    })

    .when('/settings', {
        templateUrl : 'pages/settings.html',
        controller  : 'settingsController'
    })

    .otherwise({ redirectTo: '/' });
});

//Reference used for services:
//https://fdietz.github.io/recipes-with-angular-js/controllers/sharing-code-between-controllers-using-services.html
tally.factory("QuestionBank", function() {
  var questionBank = [];
  
  return {
    custom: function() {
      return questionBank;
    },
  };
});