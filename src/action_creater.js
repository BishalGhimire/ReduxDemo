import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './action_type';

export const bugAdded = description => ({
    type : BUG_ADDED,
    payload: {
        description
    }
})

export const BugRemoved = id => ({
    type : BUG_REMOVED,
    payload: {
        id
    }
})

export const BugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
})