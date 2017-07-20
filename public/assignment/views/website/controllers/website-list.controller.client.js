(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController)

    function websiteListController($scope, $routeParams, websiteService) {
        // var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];

        function init() {
            $scope.uid = userId;
            $scope.websites = websiteService.findWebsitesByUser(userId);
        }
        init();
    }
})();
