const angular = require('angular');
import RootComponent from './app.component';
import commons from './common';
import components from './components';

const root = angular
  .module('dropdownsApp',[commons, components])
  .component('dApp',RootComponent)

document.addEventListener('DOMContentLoaded',() => angular.bootstrap(document,['dropdownsApp']))
