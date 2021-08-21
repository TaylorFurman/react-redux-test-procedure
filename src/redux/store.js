import {createStore} from 'redux';

import testProcedure from './reducer.js'

var store = createStore(testProcedure);
export default store;