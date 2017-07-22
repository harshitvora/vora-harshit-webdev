(function () {
    angular
        .module("WebAppMaker")
        .controller("newWidgetController", newWidgetController);

    function newWidgetController($scope, $routeParams, widgetService, $location) {
        // var model = this;

        //Event handles:
        $scope.createWidget = createWidget;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            $scope.uid = userId;
            $scope.wid = websiteId;
            $scope.pid = pageId;
        }
        init();

        function createWidget(widgetType) {
            var widget = {widgetType: widgetType};
            _widget = widgetService.createWidget(pageId, widget);
            if(_widget){
                $scope.successMessage = "Widget created!";
            }
            $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+'/widget/'+_widget._id);

        }
    }
})();
