(function () {
	angular.module('odontosoft.loginController', [])
		.controller('LoginController', ['$scope', '$http', function ($scope, $http) {
			$scope.user = {
				username: '',
				password: ''
			};

			$scope.ingresar = function () {
				login($http, $scope);
			}
		}]);

	function login($http, $scope) {
		// console.log($scope.user.username);
		// console.log($scope.user.password);
		$http({
				method: 'POST',
				url: 'http://localhost:3030/api/login',
				data: {
					user: $scope.user
				},
				headers: 'Content-Type: application/json'
			})
			.then(
				function success(response) {
					console.log(response);
				},
				function error(response) {
					console.log(response);
					alert('Error al intentar enviar los datos.');
				}
			).catch(
				function fail(response) {
					console.log("Excep: " + response);
				}
			);
	}
})();