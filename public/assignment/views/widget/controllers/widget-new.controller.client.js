(function () {
    angular
        .module("WebAppMaker")
        .controller("newWidgetController", newWidgetController);

    function newWidgetController($routeParams, widgetService, $location, $rootScope) {
        var model = this;

        //Event handles:
        model.createWidget = createWidget;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pid = pageId;
            $rootScope.title = "New Widget";
        }
        init();

        function createWidget(widgetType) {
            var widget = {type: widgetType};
            widgetService.createWidget(pageId, widget).then(function (response) {
                var _widget = response;
                if(_widget){
                    model.successMessage = "Widget created!";
                }
                $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+'/widget/'+_widget._id);
            });
        }
    }
})();
