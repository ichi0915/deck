import type { IController, IScope } from 'angular';

import { bootstrapModule } from './bootstrap.module';
import type { IFeatures } from '../config/settings';
import { SETTINGS } from '../config/settings';
import { ReactInjector } from '../reactShims';

const template = `
  <spinnaker-container authenticating="$ctrl.authenticating" routing="$ctrl.routing"></spinnaker-container>
`;

class SpinnakerController implements IController {
  public authenticating: boolean;
  public feature: IFeatures;
  public routing: boolean;
  public rootScope: IScope;
  constructor() {
    this.rootScope = ReactInjector.$rootScope;
    this.feature = SETTINGS.feature;
    this.authenticating = this.rootScope.authenticating;
    this.routing = this.rootScope.routing;
  }
}

bootstrapModule.component('spinnaker', {
  template,
  controller: SpinnakerController,
});
