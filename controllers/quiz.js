tally.controller('quizController', function($scope, $route, QuestionBank) {

  $scope.questionBank = QuestionBank.all();
  $scope.question_index = 0;

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
    	//$scope.correctAnswer = $scope.questionBank[$scope.question_index].options[$scope.questionBank[$scope.question_index].answer];
    	$scope.correctAnswer = $scope.questionBank[$scope.question_index].answer;
    	// console.log($scope.correctAnswer);
    	// console.log($scope.userInput);

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