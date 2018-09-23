import {AsyncStorage} from 'react-native'
import {decksResults, DECKS_STORAGE_KEY} from './_DATA'


export function fetchDecksResults (){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then(decksResults)
  }

export function submitDeck({ title }) {
 return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
     [title]: [] 
 }))
}
