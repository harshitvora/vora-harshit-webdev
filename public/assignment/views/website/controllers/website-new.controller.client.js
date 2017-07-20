(function () {
    angular
        .module("WebAppMaker")
        .controller("newWebsiteController", newWebsiteController)

    function newWebsiteController($scope, $routeParams, websiteService, $location) {
        // var model = this;

        //Event handles:
        $scope.createWebsite = createWebsite;


        var userId =  $routeParams["uid"];
        $scope.uid = userId;

        function init() {
            $scope.websites = websiteService.findWebsitesByUser(userId);
        }
        init();

        function createWebsite(website){
            var _website = websiteService.createWebsite(userId, website);
            if(_website){
                $scope.successMessage = "Website created!";
            }
            $location.url("/user/"+userId+"/website");
        }
    }
})();
