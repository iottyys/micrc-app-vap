const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
        id: String,
        title: String
        author: String
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type QueryBooks {
        books: [Book]
    }
    type MutationBookOne {
        addBook(title: String, author: String): Book
    }
    type Query {
        QueryBooks: QueryBooks
    }
    type Mutation {
        MutationBookOne: MutationBookOne
    }
`;

const books = [
    {
        id: '1',
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: '2',
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        QueryBooks: () => books,
    },
    Mutation: {
        MutationBookOne: (root, args, ctx) => {
            console.log('args', args, ctx);
            return {
                ...args,
                id: '' + Math.random()
            };
        },
    }
};

module.exports = {
    resolvers,
       typeDefs,
}
