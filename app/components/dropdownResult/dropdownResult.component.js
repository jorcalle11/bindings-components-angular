import controller from './dropdownResult.controller';

export const DropdownResultComponent = {
  bindings: {
    id:'=',
    cars:'<',
    prueba: '='
  },
  controller,
  template: `
    <md-menu>
      <md-button class="md-raised md-warn" ng-click="$ctrl.openMenu($mdOpenMenu, $event)">
        <md-icon md-menu-origin class="material-icons">touch_app</md-icon>
      </md-button>
      <md-menu-content width="4">
        <md-menu-item ng-repeat="car in $ctrl.models">
          <md-button ng-click="$ctrl.clickItem(car)">
            <md-icon md-menu-align-target class="material-icons">directions_car</md-icon>
            {{car.model}}
          </md-button>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  `
}

export default DropdownResultComponent;
