import { Language } from './language.model';
import * as LanguageActions from './language.actions';

 
const initialState: Language = {
    lang:'tr'
}

export function languageReducer(state: Language = initialState, action: LanguageActions.SetLanguage) {

    switch (action.type) {
  
        
        case LanguageActions.SET_LANGUAGE:
            localStorage.setItem('language',JSON.stringify(action.payload));
            
            return action.payload;
  
    
        default:
            return state.lang;
      }
  }