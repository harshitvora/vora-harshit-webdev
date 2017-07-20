(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", WebsiteListController)

    function WebsiteListController($routeParams, websiteService) {
        // var model = this;

        //Event handles:

        function init() {
            var userId =  $routeParams["uid"];
            $scope.websites = websiteService.findWebsitesByUser(userId);
        }
        init();
    }
})();
