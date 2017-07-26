(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);
    function userService($http) {

        var api = {
            "findUserByCredentials": findUserByCredentials,
            "findUserByUserId": findUserByUserId,
            "findUserByUsername": findUserByUsername,
            "createUser": createUser,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function findUserByCredentials(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function findUserByUserId(userId) {
            return $http.get("/api/user/"+userId);
        }

        function findUserByUsername(username) {
            return $http.get("/api/user?username=" +username);
        }

        function createUser(user) {
            var url = "/api/user";
            return $http.post(url,user);
        }

        function updateUser(userId, user) {
            var url = "/api/user/"+userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            return $http.delete("/api/user/"+userId);
        }
    }
})();