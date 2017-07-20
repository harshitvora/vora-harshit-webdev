(function () {
    angular
        .module("WebAppMaker")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($scope, $routeParams, websiteService) {
        // var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];
        $scope.uid = userId;
        function init() {

        }
        init();
    }
})();
