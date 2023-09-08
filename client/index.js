import ApolloClient from "apollo-client";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <h1>graphQl practice</h1>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
