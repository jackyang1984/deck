'use strict';

import {EXECUTION_DETAILS_SECTION_SERVICE} from 'core/delivery/details/executionDetailsSection.service';

let angular = require('angular');

module.exports = angular.module('spinnaker.netflix.pipeline.stage.chap.executionDetails.controller', [
  require('angular-ui-router'),
  EXECUTION_DETAILS_SECTION_SERVICE,
  require('core/delivery/details/executionDetailsSectionNav.directive'),
  require('core/config/settings'),
])
  .controller('ChapExecutionDetailsCtrl', function ($scope, $stateParams, executionDetailsSectionService, settings) {

    $scope.configSections = ['testRunDetails', 'taskStatus'];

    let initialized = () => {
      $scope.detailsSection = $stateParams.details;
      $scope.canaryReportUrl = [
        settings.chap.canaryReportBaseUrl,
        $scope.stage.context.run.testCase.properties.account,
        $scope.stage.context.run.testCase.properties.region,
        $scope.stage.context.run.properties.acaConfigId,
        $scope.stage.context.run.properties.analysisId,
      ].join('/');

      $scope.testCaseUrl = [
        settings.chap.chapBaseUrl,
        'testcases',
        $scope.stage.context.run.testCase.id,
      ].join('/');

      $scope.runUrl = [
        settings.chap.chapBaseUrl,
        'runs',
        $scope.stage.context.run.id,
      ].join('/');

      $scope.fitScenarioUrl = [
        settings.chap.fitBaseUrl,
        'scenarios',
        $scope.stage.context.run.testCase.properties.scenario,
      ].join('/');
    };

    let initialize = () => executionDetailsSectionService.synchronizeSection($scope.configSections, initialized);

    initialize();

    $scope.$on('$stateChangeSuccess', initialize);

  });
