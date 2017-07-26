(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController)

    function websiteListController($routeParams, websiteService, $rootScope) {
        var model = this;

        var userId =  $routeParams["uid"];

        function init() {
            model.uid = userId;
            model.websites = websiteService.findWebsitesByUser(userId);
            $rootScope.title = "Website list";
        }
        init();
    }
})();
