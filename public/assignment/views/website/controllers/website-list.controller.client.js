(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController)

    function websiteListController($routeParams, websiteService) {
        var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];

        function init() {
            model.uid = userId;
            model.websites = websiteService.findWebsitesByUser(userId);
        }
        init();
    }
})();
