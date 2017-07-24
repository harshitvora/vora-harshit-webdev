(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController", widgetListController);

    function widgetListController($routeParams, widgetService, $sce) {
        var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        model.trustUrl = trustUrl;

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pid = pageId;
            model.widgets = widgetService.findWidgetsByPageId(pageId);
        }
        init();

        function trustUrl(url) {
            console.log($sce.trustAsResourceUrl(url));
            return $sce.trustAsResourceUrl(url)
        }
    }
})();
