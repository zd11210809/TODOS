(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('myApp', []);
	app.controller('myController', ['$scope', function ($scope) {
		$scope.todos = [{
			id: 1,
			name: '吃饭',
			completed: false
		}, {
			id: 1,
			name: '睡觉',
			completed: false
		}, {
			id: 1,
			name: '敲代码',
			completed: true
		}, {
			id: 1,
			name: '占一把',
			completed: false
		}, {
			id: 1,
			name: '锻炼',
			completed: true
		}]
		//删除任务
		$scope.removeAll = function (id) {
			for (var i = 0; i < $scope.todos.length; i++) {
				var item = $scope.todos[i];
				if (item.id === id) {
					$scope.todos.splice(i, 1);
					return;
				}
			}
		}
		//添加任务
		$scope.newTodos = '';
		$scope.add = function () {
			if (!$scope.newTodos) {
				return;
			}
			$scope.todos.push({
				id: Math.random,
				name: $scope.newTodos,
				completed: false

			})
			$scope.newTodos = '';
		}
	}])

})(window);
