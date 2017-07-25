(function () {
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController)

    function registerController($location, userService, $rootScope) {
        var model = this;

        function init() {

        }
        init();

        //Event handles:
        model.register = register;

        function register(user) {
            var _user = userService.findUserByUsername(user.username);
            if(!_user){
                if(user.password === user.verifyPassword){
                    var newUser = {username: user.username, password: user.password};
                    newUser = userService.createUser(newUser);
                    $rootScope.currentUser = newUser;
                    $location.url("/user/"+newUser._id);
                }
                else {
                    model.errorMessage = "Passwords do not match!";
                }
            }
            else{
                model.error = "User already exists!";
            }
        }
    }
})();
