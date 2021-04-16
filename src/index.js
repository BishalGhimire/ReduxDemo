import store from './store';
import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './action_type';
import { bugAdded, BugResolved } from './action_creater';


store.subscribe(()=>{
    console.log("Store Changed", store.getState())
})

store.dispatch(bugAdded("Bug Test 2"))
store.dispatch(BugResolved(0))
// store.dispatch({
//     type: BUG_ADDED,
//     payload:{
//         description: "Bug 1"
//     }
// })
// store.dispatch({
//     type: BUG_REMOVED,
//     payload:{
//         id: 0
//     }
// })
console.log(store.getState());

