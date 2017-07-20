(function () {
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController)

    function registerController($scope, $location, userService) {
        // var model = this;

        function init() {

        }
        init();

        //Event handles:
        $scope.register = register;

        function register(user) {
            var _user = userService.findUserByUsername(user.username);
            if(!_user){
                var newUser = userService.createUser(user);
                $location.url("/profile/"+newUser._id);
            }
            else{
                $scope.error = "User already exists!";
            }
        }
    }
})();
