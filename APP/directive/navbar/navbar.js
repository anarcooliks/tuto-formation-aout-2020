(function() {
    'use strict';

    angular
        .module('moduleNavBar',[])
        .directive('navBar', Directive);

 //   Directive.$inject = ['dependency1'];
    function Directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
         //   bindToController: true,
            controller: function (){
                //conteneur du controller de la directive
            },
         //   controllerAs: 'vm',
            restrict: 'EAC',
            template:'<div> Voici ma directive </div>'
//            scope: {tire:'Mon premier site angularjs'
//            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
})();