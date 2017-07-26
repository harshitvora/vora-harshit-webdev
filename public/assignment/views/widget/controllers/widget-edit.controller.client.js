(function () {
    angular
        .module("WebAppMaker")
        .controller("editWidgetController", editWidgetController);

    function editWidgetController($routeParams, widgetService, $location, $rootScope) {
        var model = this;

        //Event handles:
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];
        var widgetId = $routeParams["wgid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pid = pageId;
            model.wgid = widgetId;
            var widget = widgetService.findWidgetById(widgetId);
            model.widget = widget;
            $rootScope.title = "Edit Widget";
        }
        init();

        function updateWidget(widget) {
            var _widget = widgetService.updateWidget(widgetId, widget);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
        }

        function deleteWidget() {
            widgetService.deleteWidget(widgetId);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
        }
    }
})();
