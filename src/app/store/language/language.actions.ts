import { Action } from '@ngrx/store';
import { Language } from './language.model';

export const SET_LANGUAGE = 'SET_LANGUAGE';


export class SetLanguage implements Action {
    readonly type = SET_LANGUAGE;

    constructor(public payload: Language) {
        
    }
}

//export type Actions = AddLanguage | ChangeLanguage;