import angular from 'angular';
import ngMaterial from 'angular-material';
import DropdownService from './dropdown.service';
import DropdownListComponent from './DropdownList/dropdownList.component';
import DropdownItemComponent from './DropdownItem/dropdownItem.component';
import DropdownResultComponent from './dropdownResult/dropdownResult.component';
import CardDetailComponent from './CarDetail/carDetail.component';

const components = angular
  .module('app.components',[ngMaterial])
  .service('DropdownService', DropdownService)
  .component('dListDropdown',DropdownListComponent)
  .component('dItemDropdown',DropdownItemComponent)
  .component('dResultDropdown', DropdownResultComponent)
  .component('dCarDetail', CardDetailComponent)
  .name;

export default components;
