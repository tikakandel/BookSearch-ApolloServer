const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    Password: String
    savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
  
  
    input bookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
		token: ID!
		user: User!
	}
    type Query {
        me: User
        users: [User]
    }
   
    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        deleteBook(bookId: String!): User
    }
`;

module.exports = typeDefs; 