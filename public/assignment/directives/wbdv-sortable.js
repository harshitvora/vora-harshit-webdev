(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("widgetList", widgetListDirective);

    function widgetListDirective() {
        function linkFunction(scope, element, attrs) {
            $(element).sortable();
        }
        return{
            link: linkFunction
        }
    }


})();