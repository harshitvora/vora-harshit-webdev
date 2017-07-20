(function () {
    angular
        .module("WebAppMaker")
        .controller("editWebsiteController", editWebsiteController);

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
