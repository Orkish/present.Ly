(function(){
	var app = angular.module('present.Ly', []);

	app.controler("EmailCtrl", function($scope, $http){
		$http.get("script/FEWD.json").
			success(function(data){
				$scope.FEWD = data;
			}).
			error(function(data){
				console.log("something's wrong");
			});
	});
})();