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
            model.websites = websiteService.findWebsitesByUser(userId);
            $rootScope.title = "New Website";
        }
        init();

        function createWebsite(website){
            var _website = websiteService.createWebsite(userId, website);
            if(_website){
                model.successMessage = "Website created!";
            }
            $location.url("/user/"+userId+"/website");
        }
    }
})();
