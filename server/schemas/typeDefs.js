// import gql tagged template function
//advanced use of template literals, introcuded in ES6
const { gql } = require('apollo-server-express');

// create our typeDefs
// All of our queries, mutations, and types will go in here
const typeDefs = gql`
type Thought {
  _id: ID
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
  reactions: [Reaction]
}
type Reaction {
  _id: ID
  reactionBody: String
  createdAt: String
  username: String
}
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  friends: [User]
  thoughts: [Thought]
}
  type Query {
    users:[User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
`;

// export the typeDefs
module.exports = typeDefs;