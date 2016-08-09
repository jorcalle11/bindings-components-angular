class DropdownListController {
  constructor(DropdownService) {
    this.DropdownService = DropdownService;
    this.makes = ['Ford','Acura'];
    this.cars = [];
    this.prueba = {};
    this.id = -1;
  }

  $onInit() {
    this.DropdownService.getCars().then((data) => {
      this.cars = data;
    });
  }
}

DropdownListController.$inject = ['DropdownService'];

export default DropdownListController;
