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
            widgetService.findWidgetById(widgetId).then(function (response) {
                model.widget = response.data;
            });
            $rootScope.title = "Edit Widget";
        }
        init();

        function updateWidget(widget) {
            widgetService.updateWidget(widgetId, widget).then(function (response) {
                $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
            });
        }

        function deleteWidget() {
            widgetService.deleteWidget(widgetId).then(function (response) {
                $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
            });
        }
    }
})();
