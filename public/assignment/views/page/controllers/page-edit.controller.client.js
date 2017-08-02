(function () {
    angular
        .module("WebAppMaker")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location, $rootScope) {
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
            pageService.findPageByWebsiteId(websiteId).then(function (response) {
                model.pages = response;
            });
            pageService.findPageById(pageId).then(function (response) {
                model.page = Object.assign({}, response);
            });
            $rootScope.title = "Edit page";
        }
        init();

        function updatePage(page) {
            pageService.updatePage(pageId, page).then(function (response) {
                var _page = response;
                $location.url("/user/"+userId+"/website/"+websiteId+"/page");
            });
        }

        function deletePage() {
            pageService.deletePage(pageId).then(function (response) {
                $location.url("/user/"+userId+"/website/"+websiteId+"/page");
            });
        }
    }
})();
