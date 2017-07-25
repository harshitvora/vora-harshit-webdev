(function () {
    angular
        .module("WebAppMaker")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($routeParams, websiteService, $location) {
        var model = this;

        //Event handles:
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;


        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.websites = websiteService.findWebsitesByUser(userId);
            var website = Object.assign({}, websiteService.findWebsiteById(websiteId));
            model.website = website;
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
