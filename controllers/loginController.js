(function () {
	angular.module('odontosoft.loginController', [])
		.controller('LoginController', ['$scope', '$http', function ($scope, $http) {
			$scope.user = '';
			$scope.pass = '';
			$scope.user = {
				username: $scope.user,
				password: $scope.pass
			};

			$scope.ingresar = function () {
				login($http, $scope);
			}
		}]);

	function login($http, $scope) {

	}
})();