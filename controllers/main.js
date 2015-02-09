tally.controller('mainController', function($scope, $route, $location, QuestionBank) {

	$scope.questionBank = QuestionBank.all();

  $scope.question_index = 0;
  console.log($scope.questionBank.length);

  if ($scope.questionBank.length===0) {
  	$scope.noQuestions = true;
  }
  else if ($scope.questionBank.length >= 1) {
  	$scope.noQuestions = false;
  }

      $scope.next = function () {
        if ($scope.question_index >= $scope.questionBank.length - 1) {
            $scope.question_index = 0;
        } else {
            $scope.question_index++;
        }
        $scope.userInput = {};
    };

	$scope.userInput = {};

	$scope.check = function () {
    	$scope.correctAnswer = $scope.questionBank[$scope.question_index].answer;
      
      console.log($scope.correctAnswer);
      console.log($scope.userInput.answer);

    	if ($scope.correctAnswer == $scope.userInput.answer){
    		$scope.userCorrect = true;
    		$scope.userWrong= false;
    	}
    	else {
    		$scope.userWrong = true;
    		$scope.userCorrect = false;
    	}
    };

    $scope.erase = function (){
    	$scope.userWrong= false;
    	$scope.userCorrect = false;
    };
});