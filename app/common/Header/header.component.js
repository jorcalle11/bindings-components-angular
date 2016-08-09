import './header.styles.css';

const HeaderComponent = {
  bindings: {
    name: '@',
    author: '@'
  },
  template : `
    <header class="headerMain">
      <h1>{{$ctrl.name}}</h1>
      <h4>{{$ctrl.author}}</h4>
    </header>
  `
}

export default HeaderComponent;
