import {combineReducers} from 'redux';
import { contactreducer } from './Contact';
import { editReducer } from './edit';
export const rootReducer =combineReducers({contactreducer,editReducer})