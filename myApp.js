angular.module('myApp', ['ui.router','ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')

    $stateProvider
      .state('home', {
        url : '/home',
        templateUrl : 'views/home.html'
      })
      .state('about', {
        url : '/about',
        templateUrl : 'views/about.html'
      })
      .state('work', {
        url : '/work',
        templateUrl : 'views/work.html'
      })
      .state('contact', {
        url : '/contact',
        templateUrl : 'views/contact.html'
      })
  });
