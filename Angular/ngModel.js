var app = angular.module("ngModelExamples", []);
app.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl($scope){
	$scope.count = 0;
	$scope.textChange = function(){
		$scope.count++;
		console.log("Textbox value Changed");
	};

}