import {GraphQLClient} from "graphql-request";
import {SubscriptionClient} from "subscriptions-transport-ws";

export class EndpointClients {
    private static endpointClients: EndpointClients;

    private clients: Map<string, GraphqlClient> = new Map()

    private constructor(endpoints: any) {
        for (let endpointName in endpoints) {
            this.clients.set(endpointName, new GraphqlClient(endpoints[endpointName].http, endpoints[endpointName].ws))
        }
    }

    static withEndpoints(endpoints: any): EndpointClients {
        if (!EndpointClients.endpointClients) {
            EndpointClients.endpointClients = new EndpointClients(endpoints)
        }
        return EndpointClients.endpointClients
    }

    getClients(api_endpoints: any): any {
        let clients = {}
        for (let api in api_endpoints) {
            const endpoint = this.clients.get(api_endpoints[api])
            if (!endpoint) {
                throw new Error("non config for api: " + api)
            }
            clients = {
                ...clients,
                [api_endpoints[api]]: endpoint,
            }
        }
        return clients
    }

}

class GraphqlClient {
    private readonly _http: GraphQLClient|null = null;
    private readonly _ws: SubscriptionClient|null = null;

    constructor(http: {url: string, options: {}}, ws: {url: string, options: {}}) {
        if (http) {
            this._http = new GraphQLClient(http.url, http.options)
        }
        if (ws) {
            this._ws = new SubscriptionClient(ws.url, ws.options)
        }
    }

    get http() {
        return this._http
    }

    get ws() {
        return this._ws
    }
}
