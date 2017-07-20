(function () {
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController)

    function registerController($location, userService) {
        var model = this;

        function init() {

        }
        init();

        //Event handles:
        model.register = register;

        function register(user) {
            var _user = userService.findUserByUsername(user.username);
            if(!_user){
                var newUser = userService.createUser(user);
                $location.url("/profile/"+newUser._id);
            }
            else{
                model.error = "User already exists!;"
            }
        }
    }
})();
