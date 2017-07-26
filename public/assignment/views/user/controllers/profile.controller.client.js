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

        var userId = $routeParams["uid"];

        function init() {
            var promise = userService.findUserByUserId(userId);
            promise.then(function (response) {
                model.user = response.data;
            });
            $rootScope.title = "Profile";
        }
        init();

        function updateUser(user) {
            var promise = userService.updateUser(user._id, user);
            promise.then(function (response) {
                var _user = response.data;
                if(!_user){
                    model.error = "Error updating profile";
                }
                else{
                    model.successMessage = "Profile updated!";
                    $location.url("/user/"+_user._id);
                }
            });
        }

        function deleteUser(userId) {
            var promise = userService.deleteUser(userId);
            promise.then(function (response) {
                $location.url("/login");
            });
        }

        function logout() {
            if($rootScope.currentUser){
                delete $rootScope.currentUser;
                $location.url("/login");
            }

        }
    }
})();
