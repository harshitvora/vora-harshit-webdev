(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController)

    function websiteListController($scope, $routeParams, websiteService) {
        // var model = this;

        //Event handles:

        function init() {
            var userId =  $routeParams["uid"];
            $scope.websites = websiteService.findWebsitesByUser(userId);
        }
        init();
    }
})();
