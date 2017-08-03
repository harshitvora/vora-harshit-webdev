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
        var widgetExists = false;

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pid = pageId;
            model.wgid = widgetId;

            widgetService.findWidgetById(widgetId).then(function (response) {
                var widgetTest = response;
                if(!widgetTest){
                    model.widgetType = $rootScope.newWidgetType;
                }
                else {
                    model.widgetType = widgetTest.widgetType;
                    model.widget = widgetTest;
                    widgetExists = true;
                }
            });
            $rootScope.title = "Edit Widget";
        }
        init();

        function updateWidget(widget) {

            if(widgetExists){
                widgetService.updateWidget(widgetId, widget).then(function (response) {
                    $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
                });
            }

            else{
                widget.widgetType = model.widgetType;
                widget._id = widgetId;
                widgetService.createWidget(pageId, widget).then(function (response) {
                    if(response){
                        model.successMessage = "Widget created!";
                    }
                    $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+'/widget/');
                });
            }
        }

        function deleteWidget() {
            widgetService.deleteWidget(widgetId).then(function (response) {
                $location.url("/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget");
            });
        }
    }
})();
