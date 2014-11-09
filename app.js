'use strict';

var app = angular.module('zoomApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.zoomIn = function() {
        $('.zoom-1').panzoom({
            increment: 0.5,
            duration: 500,
            minScale: 1,
            maxScale: 5,
            contain: 'invert',
            $zoomIn: $('#zoom-in-1'),
            $zoomOut: $('#zoom-out-1')
        });
    };
    $scope.zoomIn2 = function() {
        $('.zoom-2').panzoom({
            increment: 0.5,
            duration: 500,
            minScale: 1,
            maxScale: 3,
            contain: 'invert',
            $zoomIn: $('#zoom-in-2'),
            $zoomOut: $('#zoom-out-2')
        });
    };
});
