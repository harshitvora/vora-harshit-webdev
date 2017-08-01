(function () {
    angular
        .module("CheckedIn")
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
            var url = "/projectapi/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function findUserByUserId(userId) {
            return $http.get("/projectapi/user/"+userId);
        }

        function findUserByUsername(username) {
            return $http.get("/projectapi/user?username=" +username);
        }

        function createUser(user) {
            var url = "/projectapi/user";
            return $http.post(url,user);
        }

        function updateUser(userId, user) {
            var url = "/projectapi/user/"+userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            return $http.delete("/projectapi/user/"+userId);
        }
    }
})();