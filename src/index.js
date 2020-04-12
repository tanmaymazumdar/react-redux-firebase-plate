import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import firebase from 'firebase/firebase-app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import './index.css'
import App from './App'
import createStore from './store'
import * as config from './config'
import * as serviceWorker from './serviceWorker'

// Initialize Firebase instance
firebase.initializeApp(config.fbConfig)

const store = createStore()

render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider
			firebase={firebase}
			config={config.rfConfig}
			dispatch={store.dispatch}
			createFirestoreInstance={createFirestoreInstance}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
