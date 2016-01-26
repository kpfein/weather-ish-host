angular.module("weatherish").directive("showTime", function($interval){

	return {
		restrict: "E",
		template: '<h4 class="text-no-margin" style="text-align:right">{{time | date: "EEEE"}}</h4>'+
				  '<h4 class="text-no-margin" style="text-align:right">{{time | date: "MMMM d"}}</h4>'+
				  '<h4 class="text-no-margin" style="text-align:right">{{time | date: "shortTime"}}</h4>',
		link: function(scope, element, attrs){
			$interval(function(){
				scope.time = new Date();
			}, 1000);
		}
	};

});