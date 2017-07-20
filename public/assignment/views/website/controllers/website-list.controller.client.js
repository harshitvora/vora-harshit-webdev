(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController)
        .controller("newWebsiteController", newWebsiteController)
        .controller("editWebsiteController", editWebsiteController);

    function websiteListController($scope, $routeParams, websiteService) {
        // var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];
        $scope.uid = userId;

        function init() {
            $scope.websites = websiteService.findWebsitesByUser(userId);
        }
        init();
    }

    function newWebsiteController($scope, websiteService) {
        // var model = this;

        //Event handles:

        function init() {
            var userId =  $routeParams["uid"];
            $scope.uid = userId;

        }
        init();
    }

    function editWebsiteController($scope, websiteService) {
        // var model = this;

        //Event handles:

        function init() {
            var userId =  $routeParams["uid"];
            $scope.uid = userId;

        }
        init();
    }
})();
