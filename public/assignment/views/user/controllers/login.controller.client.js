(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);

    function loginController($location, userService, $rootScope) {
        var model = this;

        //Event handles:
        model.login = login;

        function init() {
            $rootScope.title = "Login";
        }
        init();

        function login(user) {
            var _user = userService.findUserByCredentials(user.username, user.password);
            if(_user === null){
                model.errorMessage = "Wrong username or password!";
            }
            else {
                $rootScope.currentUser = _user;
                $location.url("user/"+_user._id);
            }
        }
    }
})();
