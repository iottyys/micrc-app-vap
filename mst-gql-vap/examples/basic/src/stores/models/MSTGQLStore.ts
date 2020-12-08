import {
  flow,
  getEnv,
  getPropertyMembers, getRoot, resolvePath,
  types,
} from "mobx-state-tree";

// fixme 打包有问题，会导致json-pointer不可用，暂时生成在工程的stores/models中
export const MSTGQLStore = types
    .model("MSTGQLStore", {
        __queryCache: types.optional(types.map(types.frozen()), {})
    })
    .volatile((self): {
        ssr: boolean
        __promises: Map<string, Promise<unknown>>
        __afterInit: boolean
    } => {
        const { ssr = false }: { ssr: boolean } = getEnv(self)
        return {
            ssr,
            __promises: new Map(),
            __afterInit: false,
        }
    })
    .actions((self) => {
        // Promise.resolve().then(() => (self as any).__onAfterInit())

        const endpoints = getEnv(self).endpoints
        const plugins: Map<string, (params: any) => {}> = getEnv(self).plugins
        const endpoint = getPropertyMembers(self).properties.endpoint.create()

        // 获取client
        const httpClient = endpoints[endpoint].http
        const wsClient = endpoints[endpoint].ws

        if (!httpClient && !wsClient) {
            console.error("不能都为空")
        }

        const setValue = flow(function*(path: string, value: any) {
          const root = getRoot(self);
          const pathNames = path.split('/').filter(p => p);
          let node = root, nodeVal = root;
          const len = pathNames.length;
          for(let i = 0; i < len; i++) {
            const pathName = pathNames[i];
            node = getPropertyMembers(nodeVal).properties[pathName];
            if (i !== len - 1) {
              // @ts-ignore
              nodeVal = nodeVal[pathName];
            }
            // console.log('node: ', pathName, node, nodeVal);
          }
          // @ts-ignore
          const currentType = node.describe();
          // console.log('currentType: ', currentType);
          if (currentType.includes('number')) {
            value = parseFloat(value);
          } else if (currentType.includes('integer')) {
            value = parseInt(value);
          } else if (currentType.includes('boolean')) {
            value = Boolean(value);
          } else {
          }
          // @ts-ignore
          nodeVal[pathNames[len - 1]] = value;
          // console.log('node: ', node, nodeVal, value, typeof(value));
        });

        const change = flow(function*(path: string, event: any) {
          const cmp = event.target;
          // console.log('change: ', path, cmp, cmp.name, cmp.value, typeof(cmp.value));
          setValue(path + cmp.name, cmp.value);
        });

        const exec = flow(function*(actions: [{ type: 'state' | 'route' | 'api' | 'plugin', params: any }]) {
          // console.log("执行: ", actions)
          for (let i = 0, len = actions.length; i < len; i++) {
            const { type, params } = actions[i];
            // console.log('type: ', type, ' params: ', params);
            switch (type) {
              case 'state': {
                setValue(params['path'], params['value']);
                break;
              }
              case 'route': {
                break;
              }
              case 'api': {
                if (!params.hasOwnProperty('errorCallback')) {
                  params['errorCallback'] = (error: any) => {
                    console.error(error);
                  }
                }
                getData(params);
                break;
              }
              case 'plugin': {
                break;
              }
              default: {
                break;
              }
            }
          }
            // 检查actions，如果为空则直接返回true
            // 遍历actions，在plugins中查找行为函数，特殊处理exec行为，将endpoint对应的客户端放在params中。如果有任意一个没找到，打印错误并直接返回false
            // 按顺序执行行为函数数组
        });

       const getData = flow(function * (params: {
          changeLoading: (loading: boolean) => {},
          query: string,
          successCallback: (data: any)=>{},
          errorCallback: (error: any)=>{}
        }) {
         params['changeLoading'](true);
          try {
            const data = yield httpClient.request(params['query']);
            params['successCallback'](data);
          } catch (err) {
            params['errorCallback'](err);
          }
         params['changeLoading'](false);
        });

        return {
            exec, change, setValue
        }
    })
    .views((self) => {
        const doBind = (jsonpath: string, defaultVal: any, jslt: string): any => {
            console.log("绑定: ", jsonpath, defaultVal, jslt)
            if (jslt) {
                throw new Error('unsupported yet!!!')
            }
            // 使用jsonpath以store为根查询数据，如果查询不到则返回默认值
            return defaultVal
        }

        return {
            doBind
        }
    })
