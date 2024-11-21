const { ApolloServer } = require("apollo-server")
const { readFileSync } = require("fs")
const { join } = require("path")
require("dotenv").config()
const { verifyToken } = require("./auth") //TODO: We will get back to this


const typeDefs = readFileSync(
  join(__dirname, "graphql", "schema.graphql"),
  "utf8"
)
// Import the resolvers
const resolvers = require("./resolvers") // Import the resolvers

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is in the Authorization header
    if (token) {
      try {
        const user = verifyToken(token);
        return { user };
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
    return {};
  },
 })

const port = process.env.PORT || 5001

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

























