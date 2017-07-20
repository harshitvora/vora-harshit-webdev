(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController)

    function loginController($scope, $location, userService) {
        // var model = this;

        //Event handles:
        $scope.login = login;

        function init() {

        }
        init();

        function login(user) {
            var _user = userService.findUserByCredentials(user.username, user.password);
            console.log(_user);
            if(_user === null){
                $scope.errorMessage = "User not found!";
            }
            else {
                $location.url("profile/"+_user._id);
            }
        }
    }
})();
