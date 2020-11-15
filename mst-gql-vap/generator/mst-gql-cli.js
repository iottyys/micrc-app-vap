#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const graphql = require("graphql")


const definition = {
    "--roots": String
};

const { request, gql } = require("graphql-request")

function main() {
    const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
    const query = gql`
        query test {
            film {
                id
                title
            }
        }
    `
    const param = { id: 'ZmlsbXM6MQ==' };
    request(endpoint, query, param).then(res => console.log(JSON.stringify(res)))
    // const sdl = fs.readFileSync('./examples/basic/schema.graphql', 'utf8')
    // const schema = graphql.buildSchema(sdl)
    // const result = graphql.graphqlSync(schema, graphql.getIntrospectionQuery()).data
    // fs.writeFileSync('./result.json', JSON.stringify(result, null, 2))
}

main();
