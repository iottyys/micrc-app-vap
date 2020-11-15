import React, { useState, useEffect, Component } from 'react';
import {ConfigContext} from "./context";
import {config, load} from "./runtime";

let cfg = config;

/**
 * todo 打扮下这个组件，loading
 *
 * @param container
 */
export default ({container}: any) => {
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    load().then(config => {
      if (config) {
        cfg = config;
      }
      setLoading(false)
    })
  }, []);
  return (
    <React.Fragment>
      {loading
        ?
        <h1>正在载入配置</h1>
        :
        <ConfigContext.Provider value={cfg}>
          {container}
        </ConfigContext.Provider>
      }
    </React.Fragment>
  );
}
