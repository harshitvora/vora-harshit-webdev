(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController)
        .controller("newPageController", newPageController)
        .controller("editPageController", editPageController);

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

    function newPageController($scope, pageService) {
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

    function editPageController($scope, pageService) {
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
