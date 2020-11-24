import React, { useContext } from 'react';
import styles from './index.less';
import {ConfigContext} from "../../config/context";
import RootContainer, { RootStoreContext } from '../containers/root';

const Comp = () => {
  const store = useContext(RootStoreContext);

  console.log("store: ", store);
  return (
    <div>
      <h1 className={styles.title}>Page index. store: {JSON.stringify(store, null, 2)}</h1>
      <p><a href="/userForm">userForm</a></p>
      <p><a href="/user">userList</a></p>

    </div>
  );
};

export default () => {
  const config = useContext(ConfigContext);
  console.log("运行时配置: ", config);
  return (
    <RootContainer>
      <RootStoreContext.Consumer>
        {value => (
          <div>
            <h1 className={styles.title}>Page Index. store: {JSON.stringify(value)}</h1>
          </div>
        )}
      </RootStoreContext.Consumer>
      <hr />
      <Comp />
    </RootContainer>
  );
}
