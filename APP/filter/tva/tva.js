(function() {
    'use strict';

    angular
        .module('app')
        .filter('tva', Tva)
        .filter('ttc', Ttc)

    function Tva(){
        return FilterFilter;

        function FilterFilter(value, rate){

            var fractvalue = value * Math.pow(10,2);
            var roundedValue = Math.round(fractvalue) / Math.pow(10,2);
            var tvaAmount=roundedValue * (rate / 100);
            return Math.round(tvaAmount * Math.pow(10,2)) / Math.pow(10,2);

            return value * (rate/100);
        }
    }

    function Ttc() {
        return FilterFilter;

        function FilterFilter(value,rate) {
            //arrondi sur la val d'entrée
            var fractvalue = value * Math.pow(10,2);
            var roundedValue = Math.round(fractvalue) / Math.pow(10,2);
            //récupération de la fonction de filtre
            var tvafunction=Tva();
            //usage du filtre
            var tva = tvafunction(roundedValue,rate);
            //retour de la somme pour le filter ttc
            return value+tva;
        }
    }
})();