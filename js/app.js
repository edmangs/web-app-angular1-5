var myApp = angular.module('myApp', [
    'ngRoute'
]).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        .when("/users", {
            templateUrl: 'views/users/users.html',
            controller: 'usersController'
        })
        .when("/new-user", {
            templateUrl: 'views/users/new-user.html',
            controller: 'newUserController'
        }).when("/user/edit/:id", {
            templateUrl: 'views/users/edit-user.html',
            controller: 'editUserController'
        }).when("/animals", {
            templateUrl: 'views/animals/animals.html',
            controller: 'animalsController'
        }).when("/new-animal", {
            templateUrl: 'views/animals/new-animal.html',
            controller: 'newAnimalController'
        }).when("/animal/edit/:id", {
            templateUrl: 'views/animals/edit-animal.html',
            controller: 'editAnimalController'
        }).when("/contact", {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        }).when("/content", {
            templateUrl: 'views/content.html',
            controller: 'contentController'
        }).otherwise({
            redirectTo: '/addOrder'
  	});;
});