const { User, Thought} = require('../models');

//with query set up add resolver that will server the response for helloWorld query
const resolvers = {
  Query: {
    // Pass in parent as more of a placeholder parameter and not used
    // use ternary operator to check if username exists, if it does then filter by username, if not then return empty array
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find().sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
  }
};

module.exports = resolvers;