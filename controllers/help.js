tally.controller('helpController', function($scope,$location,QuestionBank) {
	$scope.message = 'List of help pertaining to different question banks will go here!';
	$scope.location = $location.path();


	$scope.questionBank = QuestionBank.all();

  $scope.question_index = 0;

 if ($scope.questionBank.length===0) {
  	$scope.noQuestions = true;
  }
  else if ($scope.questionBank.length >= 1) {
  	$scope.noQuestions = false;
  };


});