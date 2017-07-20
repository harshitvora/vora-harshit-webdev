(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams, userService, $location) {
        var model = this;

        //Event handles:
        model.updatUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            var userId = $routeParams["userId"];
            var user = userService.findUserByUserId(userId);
            model.user = user;
        }
        init();

        function updateUser(user) {
            var _user = userService.updateUser(user._id, user);
            $location.url("/profile/"+_user._id);
        }

        function deleteUser(userId) {
            userService.deleteUser(userId);
        }
    }
})();
