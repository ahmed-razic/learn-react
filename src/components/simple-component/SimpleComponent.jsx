import { Component } from 'react';

export class SimpleComponent extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default SimpleComponent;
