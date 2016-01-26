angular.module("weatherish", ["ui.router", "google.places", "angular-spinkit"]).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/home");

	$stateProvider


		.state("main", {
			url: "",
			controller: "homeCtrl",
			templateUrl: "templates/routes.html",
			// resolve: {
			// 	thisLocationWeather: function(homeService){
			// 		return homeService.getCurrentLocationWeather();
			// 	},
			// }
		})
		.state("main.home", {
			url: "/home", 
			templateUrl: "templates/home.html",
		})
		.state("main.search", {
			url: "/search", 
			templateUrl: "templates/search.html",
		})


});