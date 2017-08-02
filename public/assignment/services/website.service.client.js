(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService", websiteService);

    function websiteService($http) {

        this.findWebsitesByUser = findWebsitesByUser;
        this.createWebsite = createWebsite;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        function findWebsitesByUser(userId) {
            return $http.get("/api/user/"+userId+"/website")
                .then(function (response) {
                    return response.data;
                });
        }

        function createWebsite(userId, website) {
            var url = "/api/user/"+userId+"/website";
            return $http.post(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

        function findWebsiteById(websiteId) {
            return $http.get("/api/website/"+websiteId)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/"+websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteWebsite(websiteId) {
            return $http.delete("/api/website/"+websiteId)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();