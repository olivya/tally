tally.controller('quizController', function($scope, $route) {
  var questions = [];
  
  //console.log($route);

  //to access & display question data??
  var question = $route.current.params.question;
  $scope.question = questions[question];

  $scope.user = { answer: "" };

  //adds 1 to current question index to move to next question in line
  $scope.nextQuestion = parseInt($route.current.params.question) + 1;

});