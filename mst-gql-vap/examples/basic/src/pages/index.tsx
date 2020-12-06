import React, { useContext } from 'react';
import styles from './index.less';
import {ConfigContext} from "../../config/context";
import RootContainer, { RootStoreContext } from '../containers/root';
import { Link } from 'umi'

const Comp = () => {
  const store = useContext(RootStoreContext);

  // console.log("store: ", store);
  return (
    <div>
      <h1 className={styles.title}>Page index. store: {JSON.stringify(store, null, 2)}</h1>
      <p><Link to="/users">userList</Link></p>
    </div>
  );
};

export default () => {
  const config = useContext(ConfigContext);
  console.log("运行时配置: ", config);
  return (
    <RootContainer>
      <RootStoreContext.Consumer>
        {store => (
          <div>
            <h1 className={styles.title}>Page Index. store: {JSON.stringify(store)}</h1>
          </div>
        )}
      </RootStoreContext.Consumer>
      <hr />
      <Comp />
    </RootContainer>
  );
}
