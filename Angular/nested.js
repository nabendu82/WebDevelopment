var app = angular.module("nestedCOntroller", []);

app.controller("Ctrl1", Ctrl1);
app.controller("Ctrl2", Ctrl2);
app.controller("Ctrl3", Ctrl3);
app.controller("Ctrl4", Ctrl4);
app.controller("Ctrl5", Ctrl5);
app.controller("Ctrl6", Ctrl6);

function Ctrl1($scope){
	$scope.testProp = "From Ctrl 1";
}

function Ctrl2($scope){
	$scope.testProp = "From Ctrl 2";
}


function Ctrl3($scope){
	$scope.testProp = "From Ctrl 3";
}

function Ctrl4($scope){
	// $scope.testProp = "From Ctrl 4";
}

function Ctrl5(){
	this.testProp = "From Ctrl 5";
}

function Ctrl6(){
	this.testProp = "From Ctrl 6";
}
