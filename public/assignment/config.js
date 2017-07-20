(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController"})
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController"})
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController"})
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController"})
            .when("/user/:uid/website", {
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller: "websiteListController"})
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/templates/website-new.view.client.html",
                controller: "newWebsiteController"})
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "editWebsiteController"})
            .when("/user/:uid/website/:wid/page", {
                templateUrl: "views/page/templates/page-list.view.client.html",
                controller: "pageListController"})
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "views/page/templates/page-new.view.client.html",
                controller: "newPageController"})
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "views/page/templates/page-edit.view.client.html",
                controller: "editPageController"})
    }
})();
