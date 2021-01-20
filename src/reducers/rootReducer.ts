 //import { rapperReducers } from '..'
//  import { IState, IAction } from "./types"
//  import{IState,IAction }from'./types'
// import{ combineReducers}from'redux'
// const rootReducer={
//     ...rapperReducers,
// }
// export default combineReducers<IState,IAction>(rootReducer)
// src/reducers/rootReducer.ts
 
// import { combineReducers } from 'redux'
// import { rapperReducers } from "rap/runtime/reduxLib"
// // function shared(state: IState = {}, action: IAction) {
// //   return state
// // }
// const rootReducer = {
//   ...rapperReducers,
 
// }
// export default combineReducers<IState, IAction>(rootReducer)
// src/reducers/rootReducer.ts
import { IState, IAction } from "./types"
import { combineReducers } from 'redux'
import { rapperReducers } from "rap/runtime/reduxLib"
function shared(state: IState = {}, action: IAction) {
	return state
}
const rootReducer = {
	...rapperReducers,
	shared,
}
export default combineReducers<IState, IAction>(rootReducer)
// src/reducers/types.ts
