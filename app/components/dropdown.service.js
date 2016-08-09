class DropdownService {
  constructor($http) {
    this.$http = $http;
    this.url = 'http://localhost:3000/db/cars.json'
  }

  getCars() {
    return this.$http.get(this.url).then((response) => response.data);
  }
}

DropdownService.$inject = ['$http'];

export default DropdownService;
