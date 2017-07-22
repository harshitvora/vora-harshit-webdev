(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($scope, $routeParams, pageService) {
        // var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pages = pageService.findPageByWebsiteId(websiteId);
        }
        init();
    }
})();
