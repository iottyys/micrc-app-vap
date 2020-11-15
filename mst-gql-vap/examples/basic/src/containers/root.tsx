import React, { createContext, useContext } from "react";

import { RootStore, RootStoreType } from '../stores/root';
import { ConfigContext } from "../../config/context";

import { EndpointClients } from "../../../../../mst-gql-vap"

export const RootStoreContext = createContext<RootStoreType>(null as any);

// 数据区中每添加一个api，都要指定api
const api_endpoints = {
  books: 'test'
}

// todo 装载所有插件
const plugins = new Map<string, (params: any) => {}>()

export default ({ children }: any) => {
  const endpoints = EndpointClients.withEndpoints(useContext(ConfigContext).endpoints).getClients(api_endpoints)
  const rootStore = RootStore.create(undefined, { endpoints, plugins });
  console.log(rootStore.action())
  return (
    <RootStoreContext.Provider value={rootStore}>
      { children }
    </RootStoreContext.Provider>
  );
}
