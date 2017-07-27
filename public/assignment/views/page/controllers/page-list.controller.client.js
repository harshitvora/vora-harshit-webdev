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
            pageService.findPageByWebsiteId(websiteId)
                .then(function (response) {
                    model.pages = response.data;
                });
            $rootScope.title = "Pages";
        }
        init();
    }
})();
