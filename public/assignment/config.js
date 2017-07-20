(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController"})
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController"})
            .when("/profile/:userId", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController"})
    }
})();
