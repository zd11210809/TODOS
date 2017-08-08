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
			id: 2,
			name: '睡觉',
			completed: false
		}, {
			id: 3,
			name: '敲代码',
			completed: true
		}, {
			id: 4,
			name: '占一把',
			completed: false
		}, {
			id: 5,
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
		//显示未完成任务
		$scope.getActive = function () {
			var count = 0;
			for (var i = 0; i < $scope.todos.length; i++) {
				var item = $scope.todos[i];
				if (!item.completed) {
					count++;
				}

			}
			return count;
		}
		//清除已完成任务
		$scope.clearAll = function () {
			for (var i = $scope.todos.length - 1; i >= 0; i--) {
				var item = $scope.todos[i];
				if (item.completed) {
					$scope.todos.splice(i, 1);
				}
			}
		}
		//修改任务
		$scope.isEditing = -1;
		$scope.edit = function (id) {
			console.log(id)
			$scope.isEditing = id;
		}
		$scope.save = function () {
			$scope.isEditing = -1;
		}

	}])

})(window);
