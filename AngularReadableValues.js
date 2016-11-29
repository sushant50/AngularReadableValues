angular.module('AngularReadableValues', []).filter("AngularReadableValues", function () {
    return function (items) {
        var number;
        abs = Math.abs(items);
        if (abs >= Math.pow(10, 12)) {

            number = (items / Math.pow(10, 12)).toFixed(1) + "T";
        }
        else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {

            number = (items / Math.pow(10, 9)).toFixed(1) + "B"
        }
        else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {

            number = (items / Math.pow(10, 6)).toFixed(1) + "M"
        }
        else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {

            number = (items / Math.pow(10, 3)).toFixed(1) + "K"
        }
        else {
            number = items;
        }


        return number;
    }
});
