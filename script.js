var tally = angular.module('tally', ['ngRoute']);

//ROUTING
tally.config(function ($routeProvider,$locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // .when('/quiz/:subject', {
     .when('/quiz', {
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

    .otherwise({ redirectTo: '/' });
});

//Reference used for services:
//https://fdietz.github.io/recipes-with-angular-js/controllers/sharing-code-between-controllers-using-services.html
tally.factory("QuestionBank", function() {
  var questionBank = [];
  // [{
  //     question: 'This is Question 1',
  //     options: ['B','B','B','B'],
  //     answer: 1
  //   },
  //   {
  //     question: 'This is Question 2',
  //     options: ['Not me.','Wrong','Pick me! :D','Nope'],
  //     answer: 2
  //   },
  //   {
  //     question: 'This is Question 3',
  //     options: ['Wrong','Nope','Not me.','Pick me! :D'],
  //     answer: 3
  //   }
  //   ];

    //subjects stuff
    // var biologyQuestions = [{
    //   question: 'Biology Question 1',
    //   options: ['B','bio THIS','B','B'],
    //   answer: 1
    // },
    // {
    //   question: 'Biology Question 2',
    //   options: ['bio Not me.','bio Wrong','bio Pick me! :D','bio Nope'],
    //   answer: 2
    // },
    // {
    //   question: 'Biology Question 3',
    //   options: ['bio Wrong','bio Nope','bio Not me.','bio Pick me! :D'],
    //   answer: 3
    // }
    // ];

    // var historyQuestions = [{
    //   question: 'History Question 1',
    //   options: ['B','hist THIS','B','B'],
    //   answer: 1
    // },
    // {
    //   question: 'History Question 2',
    //   options: ['hist Not me.','bio Wrong','bio Pick me! :D','bio Nope'],
    //   answer: 2
    // },
    // {
    //   question: 'HistoryQuestion 3',
    //   options: ['hist Wrong','bio Nope','bio Not me.','bio Pick me! :D'],
    //   answer: 3
    // }
    // ];

  return {
    custom: function() {
      return questionBank;
    },
    // biology: function() {
    //   return biologyQuestions;
    // },
    // history: function() {
    //   return historyQuestions;
    // },
  };
});

// tally.factory("BiologyQuestions", function() {
//   var biologyQuestions = [{
//       question: 'Biology Question 1',
//       options: ['B','bio THIS','B','B'],
//       answer: 1
//     },
//     {
//       question: 'Biology Question 2',
//       options: ['bio Not me.','bio Wrong','bio Pick me! :D','bio Nope'],
//       answer: 2
//     },
//     {
//       question: 'Biology Question 3',
//       options: ['bio Wrong','bio Nope','bio Not me.','bio Pick me! :D'],
//       answer: 3
//     }
//     ];

//   return {
//     all: function() {
//       return biologyQuestions;
//     },
//   };
// });