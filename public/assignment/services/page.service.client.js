(function () {
    angular
        .module("WebAppMaker")
        .service("pageService", pageService);

    function pageService($http) {

        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function createPage(websiteId, page) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.post(url ,page);
        }

        function findPageByWebsiteId(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url);
        }

        function findPageById(pageId) {
            return $http.get("/api/page/"+pageId);
        }

        function updatePage(pageId, page) {
            return $http.put("/api/page/"+pageId, page);
        }

        function deletePage(pageId) {
            return $http.delete("/api/page/"+pageId);
        }
    }
})();