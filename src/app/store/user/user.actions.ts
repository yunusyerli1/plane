import { Action } from '@ngrx/store';
import { User } from './user.model';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export class Login implements Action {
    readonly type = LOGIN;

    constructor(public payload: User) {}
}

 export class Logout implements Action {
     readonly type = LOGOUT;

    constructor(public payload: any) {
    }
 }

export type Actions = Login | Logout;