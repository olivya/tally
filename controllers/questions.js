tally.controller('questionsController', function($scope, QuestionBank) {
	
	$scope.questionBank = QuestionBank.all();
	
	//Shaping up with AngularJS Tutorial:
	$scope.tab = 1;

	//switches current tab when new one is clicked
	$scope.selectTab = function(setTab) {
		$scope.tab = setTab;
	};

	//displays tab if returns true (aka. this tab === tab that was checked)
	$scope.isSelected = function(checkTab) {
		return $scope.tab === checkTab;
	};

	$scope.message = 'Tally is a customizable trivia app.';

	$scope.addQuestion = function(){
		console.log($scope.addQuestionForm);

		if($scope.addQuestionForm.$valid) {
			$scope.questionBank.push(
				{
					question:$scope.newQuestion,
					//populate options:
					options:[ $scope.newOptionA,
							  $scope.newOptionB,
							  $scope.newOptionC,
							  $scope.newOptionD ],
					answer:$scope.setAnswer
				});

			$scope.newQuestion = "";
			$scope.newOptionA = "";
			$scope.newOptionB = "";
			$scope.newOptionC = "";
			$scope.newOptionD = "";
			$scope.setAnswer = "";

			if ($scope.questionBank.length===0) {
					$scope.noQuestions = true;
				}
			else if ($scope.questionBank.length >= 1) {
					$scope.noQuestions = false;
				}
			}
		else {
			alert("Please complete all fields");
		}
	};

	// $scope.errorMessage = function(){
	// 	console.log($scope.addQuestionForm.$invalid);

	// 	if($scope.addQuestionForm.$invalid) {
	// 		$scope.errorMessageTriggered = true;
	// 	}
	// 	else if($scope.addQuestionForm.$valid) {
	// 		$scope.errorMessageTriggered = false;
	// 	}
	// };

	 $scope.deleteQuestion = function (i){ // i = $index from home.html
    	$scope.questionBank.splice(i,1);
    };
});