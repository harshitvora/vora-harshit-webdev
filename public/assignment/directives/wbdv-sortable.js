(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("widgetList", widgetListDirective);

    function widgetListDirective() {
        function linkFunction(scope, element) {


        }
        return{
            link: linkFunction
        }
    }


})();