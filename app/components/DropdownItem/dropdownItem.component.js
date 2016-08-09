import controller from './dropdownItem.controller';

export const DropdownItemComponent = {
  bindings: {
    id: '=',
    makes: '<'
  },
  controller,
  template: `
    <md-menu>
      <md-button class="md-raised md-primary" ng-click="$ctrl.openMenu($mdOpenMenu, $event)">
        <md-icon md-menu-origin class="material-icons">touch_app</md-icon>
      </md-button>
      <md-menu-content width="4">
        <md-menu-item ng-repeat="make in $ctrl.makes">
          <md-button ng-click="$ctrl.clickItem($index)">
            <md-icon md-menu-align-target class="material-icons">directions_car</md-icon>
            {{make}}
          </md-button>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  `
}

export default DropdownItemComponent;
