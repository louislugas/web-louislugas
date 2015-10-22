var webLugas = angular.module('webLugas', [
    'appControllers',
    'ngRoute'
]);

webLugas.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl: 'partials/home.html',
            controller:'HomeController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
