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
            userService.findUserByCredentials(user.username, user.password)
                .then(function (response) {
                    var _user = response.data;
                    if(_user === "0"){
                        model.errorMessage = "Wrong username or password!";
                    }
                    else {
                        $rootScope.currentUser = _user;
                        $location.url("user/"+_user._id);
                    }
                });

        }
    }
})();
