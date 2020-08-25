(function() {
    'use strict';

    angular
        .module('app')
        .filter('mycurrency', Currency)
        .filter('myround', Round);

    function Currency() {
        return function FilterFilter(value,symbol) {
            if(undefined===symbol)symbol='€';
            return ''+value+symbol;
        }
    }

    function Round() {
        return function (value, fractionSize){
            if(undefined===fractionSize) fractionSize=2;
            var fractValue=value * Math.pow(10,fractionSize);
            var roundedVal = Math.round(fractValue);
            return roundedVal / Math.pow(10,fractionSize);
        }
    }
})();