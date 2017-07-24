(function () {
    angular
        .module("WebAppMaker")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location) {
        var model = this;

        //Event handles:
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pages = pageService.findPageByWebsiteId(websiteId);
            var page = pageService.findPageById(pageId);
            model.page = page;
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
