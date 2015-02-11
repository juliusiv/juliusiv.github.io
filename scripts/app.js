var website = angular.module("website", ["ui.router"]);

website.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.
    state("home", {
      url: "/",
      templateUrl: "templates/home.html"
    }).

    state("about", {
      url: "/about",
      templateUrl: "templates/about.html"
    }).

    state("something", {
      url: "/something",
      templateUrl: "templates/something.html"
    }).

    state("projects", {
      url: "/projects",
      templateUrl: "templates/projects.html"
    }).
      state("projects.avoclocko", {
        url: "/avoclocko",
        templateUrl: "templates/project_templates/avoclocko.html"
      })
      .state("projects.identitie", {
        url: "/identitie",
        templateUrl: "templates/project_templates/identitie.html"
      })
      .state("projects.sprawl", {
        url: "/sprawl",
        templateUrl: "templates/project_templates/sprawl.html"
      })
      .state("projects.logic_circuits", {
        url: "/logic_circuits",
        templateUrl: "templates/project_templates/logic_circuits.html"
      })
      .state("projects.site", {
        url: "/site",
        templateUrl: "templates/project_templates/site.html"
      })
      .state("projects.other", {
        url: "/other",
        templateUrl: "templates/project_templates/other.html"
      });

});