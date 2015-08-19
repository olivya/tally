tally.controller('helpController', function($scope,$location,QuestionBank) {
	$scope.message = 'Tally is a fully-customizable quiz app. You can cycle through questions perpetually, at your discretion. This is for help with memory retention, similar to flashcards.';
	$scope.edit = 'Tap this icon to add, review, and/or delete questions.';
	$scope.quiz = 'When you\'re ready, tap this icon to take your quiz!';
	$scope.location = $location.path();

	$scope.questionBank = QuestionBank.all();

  $scope.question_index = 0;

 if ($scope.questionBank.length===0) {
  	$scope.noQuestions = true;
  }
  else if ($scope.questionBank.length >= 1) {
  	$scope.noQuestions = false;
  };

    $scope.updateNav = function(){
      console.log($scope.location);
      console.log('path:',path);
    };

    console.log($scope.location);

    if($scope.location === "/") {
      console.log("HOME");
      $("#home").fadeTo(200, 1);
      $("#questions").fadeTo(200, 0.4);
      $("#help").fadeTo(200, 0.4);
    }
    
    if($scope.location === "/questions") {
      console.log("Qs");
      $("#questions").fadeTo(200, 1);
      $("#home").fadeTo(200, 0.4);
      $("#help").fadeTo(200, 0.4);
    }

    if($scope.location === "/help") {
      console.log("HALP");
      $("#help").fadeTo(200, 1);
      $("#questions").fadeTo(200, 0.4);
      $("#home").fadeTo(200, 0.4);
    }
});