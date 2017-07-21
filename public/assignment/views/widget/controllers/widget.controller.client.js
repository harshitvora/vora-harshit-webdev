(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController", widgetListController)
        .controller("newWidgetController", newWidgetController)
        .controller("editWidgetController", editWidgetController);

    function widgetListController($scope, $routeParams, widgetService) {
        // var model = this;

        //Event handles:
        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pid = pageId;
            $scope.widgets = widgetService.findWidgetsByPageId(pageId);
        }
        init();
    }

    function newWidgetController($scope, $routeParams, widgetService, $location) {
        // var model = this;

        //Event handles:

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pid = pageId;
        }
        init();

        function createWidget(widget) {

        }
    }

    function editWidgetController($scope, $routeParams, pageService, $location) {
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

        }

        function deleteWidget() {

        }
    }
})();
