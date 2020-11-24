import React, { useContext } from 'react';

import {ConfigContext} from "../../config/context";
import RootContainer, { RootStoreContext } from '../containers/root';


const Comp = (res: { QueryUsers: { users: [{id: string, name: string}] } }) => {
  return (
    <div>
      userList: {JSON.stringify(res.QueryUsers.users)}
    </div>
  );
};

export default () => {
  const config = useContext(ConfigContext);
  console.log("运行时配置: ", config);
  return (
    <RootContainer>
      <RootStoreContext.Consumer>
        {store => {
          console.log('store: ', store)
          const us: any =  store.users.action();
          if (typeof us.concat === 'function') {
            return (
              <div>
                <h1>Page Index 1. store: {JSON.stringify(us)}</h1>
              </div>
            )
          } else {
            // let userList: [{id: string, name: string}] = [];
            us.then(Comp, (r1: any)=>{
              console.error(r1);
            });
          }
        }}
      </RootStoreContext.Consumer>
    </RootContainer>
  );
}
