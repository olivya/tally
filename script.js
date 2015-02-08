var tally = angular.module('tally', ['ngRoute']);

//ROUTING
tally.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    .when('/quiz/', {
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

//Reference used for services:
//https://fdietz.github.io/recipes-with-angular-js/controllers/sharing-code-between-controllers-using-services.html
tally.factory("QuestionBank", function() {
  var questionBank = [{
      question: 'This is Question 1',
      options: ['B','B','B','B'],
      answer: 1
    },
    {
      question: 'This is Question 2',
      options: ['Not me.','Wrong','Pick me! :D','Nope'],
      answer: 2
    },
    {
      question: 'This is Question 3',
      options: ['Wrong','Nope','Not me.','Pick me! :D'],
      answer: 3
    }
    ];

  return {
    all: function() {
      return questionBank;
    },
  };
});