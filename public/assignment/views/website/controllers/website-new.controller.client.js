(function () {
    angular
        .module("WebAppMaker")
        .controller("newWebsiteController", newWebsiteController)

    function newWebsiteController($scope, $routeParams, websiteService) {
        // var model = this;

        //Event handles:


        var userId =  $routeParams["uid"];
        $scope.uid = userId;
        function init() {

        }
        init();
    }
})();
