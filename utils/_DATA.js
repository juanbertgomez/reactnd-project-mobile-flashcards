
import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'MobileFlashCards:deck'

function setDummyData () {


  let initialDecksData = {
    React: {
      title: 'React from Decks.js',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript from Decks.js',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  }

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialDecksData))

  return initialDecksData
}


export function decksResults (results) {
  return results === null
    ? setDummyData()
    : {1 : 'no data'}
}