import { User } from './user.model';
import * as UserActions from './user.actions';

 
// const initialState: User = {
//     name: null,
//     username: null,
//     email: null
// }

export function userReducer(state: any, action: UserActions.Actions) {

    switch (action.type) {
  
        case UserActions.LOGIN:
            return action.payload;
  
         case UserActions.LOGOUT:
             return action.payload;

        default:
            return state;
      }
  }


//   case DELETE_CUSTOMER:
//             return {customers: state.customers.filter(x => x.id !== action.payload)};



// export const productDeleteReducer = (state = { product: {}}, action) => {
//     switch (action.type) {
//         case PRODUCT_DELETE_REQUEST:
//           return { loading: true };
//         case PRODUCT_DELETE_SUCCESS:
//           return { loading: false, success: true, product: action.payload };
//         case PRODUCT_DELETE_FAIL:
//           return { loading: false, error: action.payload }
//         default:
//           return state;
//     }
// }

// export const userSigninReducer = (state = {}, action) => {
//     switch(action.type) {
//         case USER_SIGNIN_REQUEST:
//             return { loading: true};
//         case USER_SIGNIN_SUCCESS:
//             return {loading: false, isOnline: true, userInfo: action.payload,};
//         case USER_SIGNIN_FAIL:
//             return {loading: false, isOnline:false, error: action.payload};
//         case USER_SIGNOUT_SUCCESS:
//             return {loading: false, isOnline:false, userInfo: null};
//         default:
//             return state;
//     }
// }