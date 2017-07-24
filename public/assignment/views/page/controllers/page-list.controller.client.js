(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($scope, $routeParams, pageService) {
        var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pages = pageService.findPageByWebsiteId(websiteId);
        }
        init();
    }
})();
