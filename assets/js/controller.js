var appControllers = angular.module('appControllers', []);

appControllers.controller('PhoneListCtrl', function ($scope) {
  $scope.project = [
    {'name': 'Nexus S',
     'imgUrl': 'img/work.jpg'
 	},
 	{'name': 'Motorolla A',
     'imgUrl': 'img/work.jpg'
 	},
 	{'name': 'Samsung B',
     'imgUrl': 'img/work.jpg'
 	}
  ];
});