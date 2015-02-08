tally.controller('mainController', function($scope, QuestionBank) {
	
	$scope.questionBank = QuestionBank.custom();

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
	};

	 $scope.deleteQuestion = function (i){ // i = $index from home.html
    	$scope.questionBank.splice(i,1);
    };
});