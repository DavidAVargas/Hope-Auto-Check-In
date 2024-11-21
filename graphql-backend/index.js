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

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 5001

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

























