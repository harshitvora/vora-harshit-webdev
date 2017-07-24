(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams, userService, $location) {
        var model = this;

        //Event handles:
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            var userId = $routeParams["uid"];
            var _user = userService.findUserByUserId(userId);
            model.user = _user;
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
    }
})();
