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

    function newPageController($scope, $routeParams, pageService, $location) {
        // var model = this;

        //Event handles:
        $scope.createPage = createPage;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pages = pageService.findPageByWebsiteId(websiteId);
        }
        init();

        function createPage(page) {
            var _page = pageService.createPage(websiteId, page);
            if(_page){
                $scope.successMessage = "Page created!";
            }
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }
    }

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
