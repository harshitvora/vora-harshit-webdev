(function () {
    angular
        .module("WebAppMaker")
        .controller("newPageController", newPageController);

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
})();
