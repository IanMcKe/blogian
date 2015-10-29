var blogian = angular.module('blogian', ['ui.router']);

blogian.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'splash': {
        templateUrl: "partials/splash.html",
      },
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/main.html",
      }
    }
  });
});
