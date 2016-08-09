import angular from 'angular';
import HeaderComponent from './Header/header.component';
import FooterComponent from './Footer/footer.component';

const common = angular
  .module('app.commons',[])
  .component('dHeader',HeaderComponent)
  .component('dFooter',FooterComponent)
  .name;

export default common;
