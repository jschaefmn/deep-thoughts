//with query set up add resolver that will server the response for helloWorld query
const resolvers = {
  Query: {
    helloWorld: () => {
      return 'Hello world!';
    }
  }
};

module.exports = resolvers;