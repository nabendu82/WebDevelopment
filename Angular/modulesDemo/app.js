var app = angular.module("modulesApp", ["myHelloModule", "ngTagsInput"]);

app.controller("TagDemoCtrl", TagDemoCtrl);

function TagDemoCtrl(){
	this.tags = [
	  { text: 'Text1' },
	  { text: 'Text2' },
	  { text: 'Text3' }
	];
}


