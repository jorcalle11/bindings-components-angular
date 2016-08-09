class DropdownItemController {
  constructor() {}

  openMenu($mdOpenMenu, $event) {
    $mdOpenMenu($event);
  }

  clickItem($index) {
    this.id = $index;
  }

}

export default DropdownItemController;
