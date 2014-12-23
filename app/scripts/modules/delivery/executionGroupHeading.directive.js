'use strict';

angular.module('deckApp.delivery')
  .directive('executionGroupHeading', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        value: '=',
        scale: '=',
        filter: '=',
        executions: '=',
        configurations: '=',
      },
      templateUrl: 'scripts/modules/delivery/executionGroupHeading.html',
      controller: 'executionGroupHeading as ctrl',
    };
  });
