var webLugas = angular.module('webLugas', [
    'appControllers',
    'ngRoute',
    'ui.materialize'
]);

webLugas.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        when('/project',{
            templateUrl: 'partials/project.html',
            controller: 'ProjectController'
        }).
          when('/work',{
            templateUrl: 'partials/work.html',
            controller: 'ProjectController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);


