import React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const StoreProvider = ({children}) => (
	<Provider store={store}>{children}</Provider>
)
