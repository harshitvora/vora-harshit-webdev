(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController", widgetListController);

    function widgetListController($routeParams, widgetService, $sce, $rootScope) {
        var model = this;

        //Event handles:
        model.trustUrl = trustUrl;
        model.trustHtmlContent = trustHtmlContent;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pid = pageId;
            model.widgets = widgetService.findWidgetsByPageId(pageId);
            $rootScope.title = "Widget list";
        }
        init();

        function trustUrl(url) {
            console.log($sce.trustAsResourceUrl(url));
            var youtubrUrl = "https://youtube.com/embed/";
            var urlParts = url.split("/");
            youtubrUrl += urlParts[urlParts.length - 1];
            return $sce.trustAsResourceUrl(youtubrUrl);
        }

        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }
    }
})();
