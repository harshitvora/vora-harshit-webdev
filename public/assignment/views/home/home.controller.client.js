(function () {
    angular.module("WebAppMaker")
        .controller("homeController", homeController);

    function homeController($location, $rootScope){
        var model = this;

        // Event handles:

        model.logout = logout;

        function init() {

        }
        init();

        function logout() {
            if($rootScope.currentUser){
                delete $rootScope.currentUser;
                $location.url("/");
            }

        }
    }
})();