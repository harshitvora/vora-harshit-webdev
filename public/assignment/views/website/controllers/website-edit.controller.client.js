(function () {
    angular
        .module("WebAppMaker")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($routeParams, websiteService, $location, $rootScope) {
        var model = this;

        //Event handles:
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;


        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            websiteService.findWebsitesByUser(userId)
                .then(function (response) {
                    model.websites = response;
                });
            websiteService.findWebsiteById(websiteId)
                .then(function (response) {
                    var website = Object.assign({}, response);
                    model.website = website;
                });
            $rootScope.title = "Edit Website";
        }
        init();

        function updateWebsite(website) {
            websiteService.updateWebsite(websiteId, website)
                .then(function (response) {
                    $location.url("/user/"+userId+"/website");
                });
        }

        function deleteWebsite() {
            websiteService.deleteWebsite(websiteId)
                .then(function (response) {
                    $location.url("/user/"+userId+"/website");
                });
        }
    }
})();
