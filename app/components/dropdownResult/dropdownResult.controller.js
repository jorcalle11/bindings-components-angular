class DropdownResultController {
  constructor() {
    this.models = [];
  }

  openMenu($mdOpenMenu, $event) {
    this.loadModels();
    $mdOpenMenu($event);
    console.log(this.id);
    console.log(this.cars);
    console.log(this.prueba);
  }

  clickItem(car) {
    console.log(car);
    this.prueba = car;
  }

  loadModels() {
    switch (this.id) {
      case 0:
        this.models = this.cars.filter((car) => car.make === 'Ford');;
        break;
      case 1:
        this.models = this.cars.filter((car) => car.make === 'Acura');
        break;
      default:
        this.models = [];
    }
  }
}

export default DropdownResultController;
