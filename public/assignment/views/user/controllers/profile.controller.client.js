(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams, userService, $location) {
        // var model = this;

        //Event handles:
        $scope.updateUser = updateUser;
        $scope.deleteUser = deleteUser;

        function init() {
            var userId = $routeParams["userId"];
            var _user = userService.findUserByUserId(userId);
            $scope.user = _user;
        }
        init();

        function updateUser(user) {
            var _user = userService.updateUser(user._id, user);
            if(!_user){
                $scope.error = "Error updating profile";
            }
            else{
                $scope.successMessage = "Profile updated!";
                $location.url("/profile/"+_user._id);
            }
        }

        function deleteUser(userId) {
            userService.deleteUser(userId);
            $location.url("/login");
        }
    }
})();
