import {module} from 'angular';

import {EXECUTION_DETAILS_SECTION_SERVICE,
        ExecutionDetailsSectionService} from 'core/delivery/details/executionDetailsSection.service';
import {BaseExecutionDetailsCtrl,
        IExecutionDetailsScope,
        IExecutionDetailsStateParams} from '../../core/baseExecutionDetails.controller';

class DestroyAsgExecutionDetailsCtrl extends BaseExecutionDetailsCtrl {
  static get $inject() { return ['$scope', '$stateParams', 'executionDetailsSectionService']; }

  constructor ($scope: IExecutionDetailsScope,
               $stateParams: IExecutionDetailsStateParams,
               executionDetailsSectionService: ExecutionDetailsSectionService) {
    super($scope, $stateParams, executionDetailsSectionService);

    super.setScopeConfigSections(['destroyServerGroupConfig', 'taskStatus']);
    super.initialize();
  }
}

export const DESTROY_ASG_EXECUTION_DETAILS_CTRL = 'spinnaker.core.pipeline.stage.destroyAsg.executionDetails.controller';

module(DESTROY_ASG_EXECUTION_DETAILS_CTRL, [
  require('angular-ui-router'),
  EXECUTION_DETAILS_SECTION_SERVICE,
  require('core/delivery/details/executionDetailsSectionNav.directive.js'),
]).controller('destroyAsgExecutionDetailsCtrl', DestroyAsgExecutionDetailsCtrl);
