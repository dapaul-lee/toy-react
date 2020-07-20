import { ToyReact, Component } from './src/ToyReact';

class MyComponet extends Component {

  render() {
    return  <div>
      <div>3</div>
      {this.children}
    </div>
  }
}

let a = <MyComponet name="a" id="ida">
    <span>Hello</span>
    <span></span>
    <span></span>
</MyComponet>


ToyReact.render(
  a,
  document.body
)
