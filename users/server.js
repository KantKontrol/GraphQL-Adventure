const express = require("express");
const expressGraphQL = require("express-graphql");


const PORT = process.env.PORT || 3001;


const app = express();

app.use("/graphql", expressGraphQL({
    graphiql: true
}));


app.listen(PORT, () => {
    console.log("listening...");
});