(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("widgetList", widgetListDirective);

    function widgetListDirective(widgetService) {
        function linkFunction(scope, element, attrs) {
            var startIndex = -1;
            var endIndex = -1;
            $(element).sortable({
                axis: "y",
                handle: ".sort-handle",
                start: function (event, ui) {
                    startIndex = ui.item.index();
                    console.log(startIndex);
                },
                stop: function (event, ui) {
                    endIndex = ui.item.index();
                    console.log(endIndex);
                    widgetService.saveWidgetIndex(startIndex, endIndex, scope.model.pid);
                }});
        }
        return{
            link: linkFunction
        }
    }
})();