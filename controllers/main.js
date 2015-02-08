tally.controller('mainController', function($scope) {
	
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

	$scope.questionBank = [{
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

	$scope.question_index = 0;

    $scope.next = function () {
        if ($scope.question_index >= $scope.questionBank.length - 1) {
            $scope.question_index = 0;
        } else {
            $scope.question_index++;
        }
        $scope.userInput = {};
    };


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
	}

	$scope.userInput = {};

	$scope.check = function () {
    	//$scope.correctAnswer = $scope.questionBank[$scope.question_index].options[$scope.questionBank[$scope.question_index].answer];
    	$scope.correctAnswer = $scope.questionBank[$scope.question_index].answer;
    	console.log($scope.correctAnswer);
    	console.log($scope.userInput);

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