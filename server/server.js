const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const PORT = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // These two lines below enable the playground when deployed to heroku. You can remove them if you don't want this functionality
  introspection: true,
  playground: true,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
