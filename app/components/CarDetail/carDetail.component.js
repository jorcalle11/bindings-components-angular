import controller from './carDetail.controller';

const CarDetailComponent = {
  bindings: {
    prueba: '<'
  },
  controller,
  template : `
    <md-content>
      <md-card md-theme="{{ showDarkTheme ? 'dark-grey' : 'default' }}" md-theme-watch>
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline">{{$ctrl.prueba.make}}</span>
            <span class="md-subhead">{{$ctrl.prueba.model}}</span>
          </md-card-title-text>
          <md-card-title-media>
            <img ng-src="{{$ctrl.prueba.photo}}" alt="{{$ctrl.prueba.photo}}" width="150">
          </md-card-title-media>
        </md-card-title>
        <md-card-actions layout="row" layout-align="end center">
          <md-button>Action 1</md-button>
          <md-button>Action 2</md-button>
        </md-card-actions>
      </md-card>
    </md-content>
  `
}

export default CarDetailComponent;
