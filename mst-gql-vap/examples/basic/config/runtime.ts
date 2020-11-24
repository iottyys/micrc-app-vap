/**
 * 本地配置，配置由react context向下传递
 */
export const config: any = {
  endpoints: {
    localhost8000: {
      http: {
        url: 'http://localhost:8000/graphql',
        options: {}
      },
      ws: null,
    },
    endpoint1: {
      http: {
        url: 'http://localhost:8080/graphql',
        options: {}
      },
      ws: null,
    },
    test: {
      http: {
        url: 'http://localhost:8080/graphql',
        options: {}
      },
      ws: null,
    }
  }
};

/**
 * 运行时从eggjs服务端获取运行时配置替换本地配置
 * 如api服务器地址，打包时无法确定，是由k8s configmap配置给eggjs，再由客户端获取
 * 注意不会合并配置
 */
export const load = () => {
  return fetch('/config').then(res => {
    const contentType = res.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return res.json()
    }
  }).then(json => {
    if (json && json.config) {
      return json.config
    }
  }).catch(err => {
    console.error(err, '必须在当前服务下配置/config路由返回运行时配置')
    return null
  })
}
