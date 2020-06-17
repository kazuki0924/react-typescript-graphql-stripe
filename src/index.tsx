import './index.css'

import ApolloClient from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import * as serviceWorker from './serviceWorker'
import { Routes } from './Routes'

const client = new ApolloClient({
	uri: 'http:/localhost:4000/graphql',
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
