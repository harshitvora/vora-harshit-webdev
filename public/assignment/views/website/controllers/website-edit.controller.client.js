(function () {
    angular
        .module("WebAppMaker")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($scope, $routeParams, websiteService, $location) {
        // var model = this;

        //Event handles:
        $scope.updateWebsite = updateWebsite;
        $scope.deleteWebsite = deleteWebsite;


        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.websites = websiteService.findWebsitesByUser(userId);
            var website = websiteService.findWebsiteById(websiteId);
            $scope.website = website;
        }
        init();

        function updateWebsite(website) {
            var _website = websiteService.updateWebsite(websiteId, website);
            $location.url("/user/"+userId+"/website");
        }

        function deleteWebsite() {
            websiteService.deleteWebsite(websiteId);
            $location.url("/user/"+userId+"/website");
        }
    }
})();
