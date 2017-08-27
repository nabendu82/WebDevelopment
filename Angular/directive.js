angular.module("directiveApp", []).controller("DirectiveCtrl", DirectiveCtrl);

function DirectiveCtrl(){
	this.myList = [1, 2, 3, 4, 5, 6];
	this.myList2 = [
		{'name': "Nabs", 'age': 36},
		{'name': "Shikha", 'age': 35},
		{'name': "Hriday", 'age': 4},
		{'name': "Pranab", 'age': 40}
	];
}
