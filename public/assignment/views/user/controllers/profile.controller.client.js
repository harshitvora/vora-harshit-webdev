(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams, userService, $location, $rootScope) {
        var model = this;

        //Event handles:
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.logout = logout;

        function init() {
            var userId = $routeParams["uid"];
            var _user = userService.findUserByUserId(userId);
            model.user = _user;
            $rootScope.title = "Profile";
        }
        init();

        function updateUser(user) {
            var _user = userService.updateUser(user._id, user);
            if(!_user){
                model.error = "Error updating profile";
            }
            else{
                model.successMessage = "Profile updated!";
                $location.url("/user/"+_user._id);
            }
        }

        function deleteUser(userId) {
            userService.deleteUser(userId);
            $location.url("/login");
        }

        function logout() {
            if($rootScope.currentUser){
                delete $rootScope.currentUser;
                $location.url("/login");
            }

        }
    }
})();
