import controller from './dropdownList.controller';

const DropdownListComponent = {
  controller,
  template : `
    <md-content flex layout-padding  style="text-align:center">
      <p >En el primer <strong>dropdown Button</strong> Selecciona la marca de un vehiculo. Luego en el siguiente, selecciona el modelo</p>
      <p><code>{{$ctrl.prueba | json}}</code></p>
      <div>
        <p>seleccionaste a <strong>{{$ctrl.makes[$ctrl.id] || 'Ninguno'}}</strong> </p>
        <d-item-dropdown id="$ctrl.id" makes="$ctrl.makes"></d-item-dropdown>
        <d-result-dropdown id="$ctrl.id" prueba="$ctrl.prueba" cars="$ctrl.cars"></d-item-dropdown>
      </div>
      <div style="max-width:50%; margin: 10px auto" ng-if="$ctrl.prueba.id">
        <d-car-detail prueba="$ctrl.prueba"></d-car-detail>
      </div>
    </md-content>
  `
}

export default DropdownListComponent;
