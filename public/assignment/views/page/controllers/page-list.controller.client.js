(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($rootScope, $routeParams, pageService) {
        var model = this;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pages = pageService.findPageByWebsiteId(websiteId);
            $rootScope.title = "Pages";
        }
        init();
    }
})();
