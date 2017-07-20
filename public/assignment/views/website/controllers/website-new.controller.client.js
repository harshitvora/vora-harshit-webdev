(function () {
    angular
        .module("WebAppMaker")
        .controller("newWebsiteController", newWebsiteController)

    function newWebsiteController($scope, websiteService) {
        // var model = this;

        //Event handles:

        function init() {
            var userId =  $routeParams["uid"];
            $scope.uid = userId;

        }
        init();
    }
})();
