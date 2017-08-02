(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController)

    function websiteListController($routeParams, websiteService, $rootScope) {
        var model = this;

        var userId =  $routeParams["uid"];

        function init() {
            model.uid = userId;
            websiteService.findWebsitesByUser(userId)
                .then(function (response) {
                    model.websites = response;
                });
            $rootScope.title = "Website list";
        }
        init();
    }
})();
