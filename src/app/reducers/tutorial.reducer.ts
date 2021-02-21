import { Action}  from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'


const initialState: Tutorial = {
    name: 'Initial tutorial',
    url: 'http://google.com'
}

export function reducer(state:Tutorial[] = [initialState], action:TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state,action.payload];
        
            case TutorialActions.REMOVE_TUTORIAL:
            var newState = state.splice(action.payload,1);
            return newState;
            
        default:
            return state;
    }
}