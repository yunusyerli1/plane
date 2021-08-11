import { User } from './user.model';
import * as UserActions from './user.actions';

 
// const initialState: User = {
//     name: null,
//     username: null,
//     email: null
// }

export function userReducer(state: User, action: UserActions.Actions) {

    switch (action.type) {
  
        case UserActions.LOGIN:
            return action.payload;
  
        // case UserActions.LOGOUT:
        //     return action.payload;

        default:
            return state;
      }
  }