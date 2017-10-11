(function() {

  var app = angular.module("gitHubViewer");

  var RepoController = function($scope, github, $routeParams) {

    var onRepoComplete = function(data) {
      $scope.repo = data;
      github.getSubscribers($scope.repo).then(onSubscribers, onError);
    };

    var onSubscribers = function(data) {
      $scope.subscribers = data;
    };

    var onError = function(reason) {
      $scope.error = "Can't get.";
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    github.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
  };

  app.controller("RepoController", RepoController);

}());