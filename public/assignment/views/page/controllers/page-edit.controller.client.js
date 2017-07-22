(function () {
    angular
        .module("WebAppMaker")
        .controller("editPageController", editPageController);

    function editPageController($scope, $routeParams, pageService, $location) {
        // var model = this;

        //Event handles:
        $scope.updatePage = updatePage;
        $scope.deletePage = deletePage;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pages = pageService.findPageByWebsiteId(websiteId);
            var page = pageService.findPageById(pageId);
            $scope.page = page;
        }
        init();

        function updatePage(page) {
            var _page = pageService.updatePage(pageId, page);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }

        function deletePage() {
            pageService.deletePage(pageId);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }
    }
})();
