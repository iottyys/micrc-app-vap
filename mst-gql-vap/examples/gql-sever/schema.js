const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Author {
        id: ID!
        name: String!
    }
    type Book {
        id: ID!
        title: String!
        author: Author!
    }
    type User {
        # 主键ID
        id: ID!
        name: String!
    }

    input UserInput {
        id: ID
        name: String
    }
    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type QueryBooks {
        books: [Book]
    }
    type QueryUsers {
        users: [User],
        findById(id: String): User
    }
    type MutationBook {
        addBook(title: String, authorName: String): Book
    }
    type MutationUser {
        add(user: UserInput): User,
        update(user: UserInput): User,
        remove(id: String!): Boolean
    }
    
    type Query {
        QueryBooks: QueryBooks,
        QueryUsers: QueryUsers
    }
    type Mutation {
        MutationBook: MutationBook,
        MutationUser: MutationUser
    }
`;

const books = [
    {
        id: '1',
        title: 'The Awakening',
        author: {
            id: '1',
            name: 'Kate Chopin'
        },
    },
    {
        id: '2',
        title: 'City of Glass',
        author: {
            id: '2',
            name: 'Paul Auster'
        }
    }
];

const authors = [{id: '1', name: 'zhangsan'}];
const users = [{id: '1', name: 'zhangsan'}];

const resolvers = {
    Query: {
        QueryBooks: () => {
            return {
                books: () => books
            }
        },
        QueryUsers: () => {
            return {
                users: () => users,
                findById: ({id}) => {
                    return users.find(u => u.id === id);
                }
            }
        },
    },
    Mutation: {
        MutationBook: () => {
            return {
                addBook: (args) => {
                    console.log('args', args);
                    const author = {id: ''+Math.random(),name: args.authorName};
                    authors.push(author);
                    return {
                        title: args.title,
                        author: author,
                        id: '' + Math.random()
                    };
                }
            }

        },
        MutationUser: () => {
            return {
                add: ({user: { name }}) => {
                    // noinspection JSCheckFunctionSignatures
                    const user = {
                        name,
                        id: '' + (Math.max(...users.map(u=>parseInt(u.id))) + 1)
                    };
                    users.push(user);
                    return user;
                },
                update: ({user}) => {
                    // noinspection JSCheckFunctionSignatures
                    const idx = users.findIndex(u => u.id === user.id);
                    const input = Object.assign(users[idx], user);
                    users.splice(idx, 1, input);
                    return user;
                },
                remove: ({id}) => {
                    const oldCount = users.length;
                    // noinspection JSCheckFunctionSignatures
                    const idx = users.findIndex(u => u.id === id);
                    users.splice(idx, 1);
                    return oldCount === users.length + 1;
                }
            }
        }
    }
};

module.exports = {
    resolvers,
    typeDefs
};
