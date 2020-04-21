import { createStore, applyMiddleware} from 'redux'
import promiseMIddleware from 'redux-promise-middleware'

//import cards from './cardReducer'
import users from './userReducer'

export default createStore(users,applyMiddleware(promiseMIddleware))


