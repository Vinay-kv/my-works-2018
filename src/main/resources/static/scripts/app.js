var expdMngtApp = angular.module('expdMngtApp', [ 'ngRoute' ]);



expdMngtApp.config(function($routeProvider) {
	$routeProvider
	// .when('/', {
	// controller:'indexController',
	// templateUrl:'index.html'
	// })
	.when('/edit/:projectId', {
		controller : 'EditProjectController as editProject',
		templateUrl : 'detail.html'
	}).when('/new', {
		controller : 'NewProjectController as editProject',
		templateUrl : 'detail.html'
	}).otherwise({
		redirectTo : '/'
	});
})
