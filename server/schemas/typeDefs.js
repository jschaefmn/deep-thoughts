// import gql tagged template function
//advanced use of template literals, introcuded in ES6
const { gql } = require('apollo-server-express');

// create our typeDefs
// All of our queries, mutations, and types will go in here
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;