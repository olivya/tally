var tally = angular.module('tally', ['ngRoute','ngAnimate']);

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
    all: function() {
      return questionBank;
    },
  };
});

if($(window).width() > 600) {
  alert("It appears you may not be on a mobile device! Tally is optimized for mobile devices - if you are on a computer, it is recommended you decrease the size of your browser window to avoid unexpected behaviour.");
}