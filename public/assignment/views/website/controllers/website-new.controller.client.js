(function () {
    angular
        .module("WebAppMaker")
        .controller("newWebsiteController", newWebsiteController)

    function newWebsiteController($routeParams, websiteService, $location, $rootScope) {
        var model = this;

        //Event handles:
        model.createWebsite = createWebsite;

        var userId =  $routeParams["uid"];
        model.uid = userId;

        function init() {
            websiteService
                .findWebsitesByUser(userId)
                .then(function (response) {
                    model.websites = response;
                });
            $rootScope.title = "New Website";
        }
        init();

        function createWebsite(website){
            websiteService
                .createWebsite(userId, website)
                .then(function (response) {
                    var _website = response;
                    if(_website){
                        model.successMessage = "Website created!";
                    }
                    $location.url("/user/"+userId+"/website");
                });
        }
    }
})();
