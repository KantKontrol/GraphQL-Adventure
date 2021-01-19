const express = require("express");
const { graphqlHTTP } = require("express-graphql");


const PORT = process.env.PORT || 3001;


const app = express();

app.use("/graphql", graphqlHTTP({
    graphiql: true
}));


app.listen(PORT, () => {
    console.log("listening...");
});