import React, { useContext } from 'react';

import {ConfigContext} from "../../config/context";
import RootContainer, { RootStoreContext } from '../containers/root';

class Input extends React.Component {
  state = {
    value: ''
  };
  constructor(props: any) {
    super(props);
    this.render = this.render.bind(this);
    this.state = {
      value: ''
    };
  }
  handleChange(event: any) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event: any) {
    const user = this.props.action([{type: 'addUser', params: this.state.value}]);
    console.log(user);
  }
  render() {
    const value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange.bind(this)} />
        <input type="button" value="Submit" onClick={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default () => {
  const config = useContext(ConfigContext);
  console.log("运行时配置: ", config);
  // @ts-ignore
  return (
    <RootContainer>
      <RootStoreContext.Consumer>
        {value => (
          <div>
            <Input action={value.users.action} />
          </div>
        )}
      </RootStoreContext.Consumer>
    </RootContainer>
  );
}
