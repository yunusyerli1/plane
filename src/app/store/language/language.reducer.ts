import { Language } from './language.model';
import * as LanguageActions from './language.actions';

 
const initialState: Language = {
    lang:'en'
}

export function languageReducer(state: Language = initialState, action: LanguageActions.ChangeLanguage) {

    switch (action.type) {
  
        // case LanguageActions.ADD_LANGUAGE:
        //     return [...state.lang, action.payload];

        case LanguageActions.CHANGE_LANGUAGE:
            return state=action.payload;
  
    
        default:
            return state.lang;
      }
  }