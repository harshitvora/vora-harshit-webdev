(function () {
    angular
        .module("WebAppMaker")
        .controller("newPageController", newPageController);

    function newPageController($rootScope, $routeParams, pageService, $location) {
        var model = this;

        //Event handles:
        model.createPage = createPage;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pages = pageService.findPageByWebsiteId(websiteId);
            $rootScope.title = "New page";
        }
        init();

        function createPage(page) {
            var _page = pageService.createPage(websiteId, page);
            if(_page){
                model.successMessage = "Page created!";
            }
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }
    }
})();
