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
            pageService.findPageByWebsiteId(websiteId).then(function (response) {
                model.pages = response.data;
            });
            $rootScope.title = "New page";
        }
        init();

        function createPage(page) {
            pageService.createPage(websiteId, page).then(function (response) {
                var _page = response.data;
                if(_page){
                    model.successMessage = "Page created!";
                }
                $location.url("/user/"+userId+"/website/"+websiteId+"/page");
            });
        }
    }
})();
