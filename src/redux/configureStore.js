import { combineReducers,createStore} from "redux";
import counterReducer from './ducks/counter.js';
import thunk from 'redux-thunk'

const reducer =  combineReducers(
    {
        counter:counterReducer
    }
)


const store= createStore(reducer)


export default store;