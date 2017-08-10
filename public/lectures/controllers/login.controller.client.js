(function () {
    angular
        .module("WamApp")
        .controller("loginController", loginController)

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    function loginController($scope, $location) {
        $scope.login = function (user) {
            for(var u in users){
                var _user = users[u];
                console.log("test");
                if(_user.username === user.username && _user.password === user.password){
                    var userId = _user._id;
                    console.log(userId);
                    $location.url("profile/"+userId);
                }
            }
        }
    }
})();
