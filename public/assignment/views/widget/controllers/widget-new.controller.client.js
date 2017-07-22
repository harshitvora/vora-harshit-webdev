(function () {
    angular
        .module("WebAppMaker")
        .controller("newWidgetController", newWidgetController);

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
})();
