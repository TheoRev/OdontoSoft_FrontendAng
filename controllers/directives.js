(function () {
	angular.module('odontosoft.directives', [])
		.directive('menuBar', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/menu-bar.html'
			};
		})
		.directive('loginUser', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/login-user.html'
			};
		});
})();