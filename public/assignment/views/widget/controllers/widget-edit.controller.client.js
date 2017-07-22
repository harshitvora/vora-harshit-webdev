(function () {
    angular
        .module("WebAppMaker")
        .controller("editWidgetController", editWidgetController);

    function editWidgetController($scope, $routeParams, widgetService, $location) {
        // var model = this;

        //Event handles:
        $scope.updateWidget = updateWidget;
        $scope.deleteWidget = deleteWidget;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];
        var widgetId = $routeParams["wgid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pid = pageId;
            $scope.wgid = widgetId;
            var widget = widgetService.findWidgetById(widgetId);
            $scope.widget = widget;
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
