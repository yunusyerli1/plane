import { Action } from '@ngrx/store';
import { Language } from './language.model';

export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';


export class AddLanguage implements Action {
    readonly type = ADD_LANGUAGE;

    constructor(public payload: Language) {}
}
export class ChangeLanguage implements Action {
    readonly type = CHANGE_LANGUAGE;

    constructor(public payload: Language) {
        
    }
}

//export type Actions = AddLanguage | ChangeLanguage;