(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepo = function(username, reponame) {
      return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
        .then(function(response) {
          return response.data;
        });
    };

    var getSubscribers = function(repo) {
      return $http.get(repo.subscribers_url)
        .then(function(response) {
          return response.data;
        });
    };

    //Expose what the service offers
    return {
        getUser: getUser
        ,getRepos: getRepos
        ,getRepo: getRepo
        ,getSubscribers: getSubscribers
    };
  };

  //Declare the module
  var module = angular.module("gitHubViewer");

  //register the service
  module.factory("github", github);

}());