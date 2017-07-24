(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);

    function loginController($location, userService, $rootScope) {
        var model = this;

        //Event handles:
        model.login = login;

        function init() {

        }
        init();

        function login(user) {
            var _user = userService.findUserByCredentials(user.username, user.password);
            if(_user === null){
                model.errorMessage = "User not found!";
            }
            else {
                $rootScope.currentUser = _user;
                $location.url("user/"+_user._id);
            }
        }
    }
})();
