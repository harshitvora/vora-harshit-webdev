(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("widgetList", widgetListDirective);

    function widgetListDirective() {
        function linkFunction(scope, element, attrs) {
            $(element).sortable({
                handle: ".sort-handle"});
        }
        return{
            link: linkFunction
        }
    }


})();