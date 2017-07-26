(function () {
    angular
        .module("WebAppMaker")
        .service("pageService", pageService);

    function pageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }];

        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);
            return page;
        }

        function findPageByWebsiteId(websiteId) {
            var _pages = [];

            for(var p in pages){
                if(pages[p].websiteId === websiteId){
                    _pages.push(pages[p]);
                }
            }
            return _pages;
        }

        function findPageById(pageId) {
            for(var p in pages){
                if(pages[p]._id === pageId){
                    return(pages[p]);
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            page._id = pageId;
            for(var p in pages){
                if(pages[p]._id === pageId){
                    pages[p] = page;
                }
            }
            return page;
        }

        function deletePage(pageId) {
            for(var p in pages){
                if(pages[p]._id === pageId){
                    delete pages[p];
                }
            }
        }
    }
})();