import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import getProductData from '../reducers/get-products-data'

const store = createStore(getProductData, applyMiddleware(thunk))

export default store