angular.module("weatherish").service("homeService", function($http, $q){

	this.getCurrentLocationWeather = function(){
		var deferred = $q.defer();
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				var currentWeather;
				$http({
					method: "GET",
					url: "/api/forecastIOKey",
				}).then(function(result){
					forecastIOKey = result.data;
					$http({
						method: "JSONP",
						url: "https://api.forecast.io/forecast/" + forecastIOKey + "/" + lat + "," + lon + "?callback=JSON_CALLBACK" 
					}).then(function(results){
						currentWeather = results.data;
						deferred.resolve(currentWeather);
					});
				});
			});
				return deferred.promise;

		} else {
			alert("Could not get current location to show weather in your area")
		}
	};

	this.findWeather = function(lat, lon){
		var dfd = $q.defer();
		$http({
			method: "GET",
			url: "/api/forecastIOKey",
		}).then(function(result){
			forecastIOKey = result.data;
			$http({
				method: "JSONP",
				url: "https://api.forecast.io/forecast/" + forecastIOKey + "/" + lat + "," + lon + "?callback=JSON_CALLBACK",
			}).then(function(results){
				dfd.resolve(results.data);
			})
		})
		return dfd.promise;
	};

});