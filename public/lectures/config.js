(function () {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {templateUrl: "templates/login.html"})
            .when("/register", {templateUrl: "templates/register.html"})
            .when("/user/:userId", {templateUrl: "templates/profile.html"})
    }
})();
