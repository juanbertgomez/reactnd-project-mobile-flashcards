import {AsyncStorage} from 'react-native'
import {decksResults, DECKS_STORAGE_KEY} from './_DATA'


export function fetchDecksResults (){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then(decksResults)
  }

export function submitDeck({ title, questions }) {
 return AsyncStorage.mergeItem('MobileFlashCards:deck', JSON.stringify({
     title, questions
 }))
}

export function submitQuestion(key, question, answer) {
    let newQuestion = {
      question: question,
      answer: answer
    }
  
    return fetchQuestions().then(questions => {
        return AsyncStorage.setItem(
          QUESTIONS_STORAGE_KEY,
          JSON.stringify({
            [key]: newQuestion
          })
        )
    })
  }
