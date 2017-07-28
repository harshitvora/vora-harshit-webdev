(function () {
    angular
        .module("CheckedIn")
        .controller("registerController", registerController)

    function registerController($location, userService, $rootScope) {
        var model = this;

        //Event handles:
        model.register = register;

        function init() {
            $rootScope.title = "Register";
        }
        init();

        function register(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    _user = response.data;
                    if(!_user){
                        if(user.password === user.verifyPassword){
                            var newUser = {username: user.username, password: user.password};
                            return userService.createUser(newUser)
                        }
                        else {
                            model.errorMessage = "Passwords do not match!";
                        }
                    }
                    else{
                        model.error = "User already exists!";
                    }
                })
                .then(function (response) {
                    newUser = response.data;
                    $rootScope.currentUser = newUser;
                    $location.url("/user/"+newUser._id);
                });
        }
    }
})();
