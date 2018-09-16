import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { fetchDecksResults } from '../utils/api'

class Decks extends Component {
  state = {
    deckData : {
      1: {
        title: 'React from state',
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
      2: {
        title: 'JavaScript from state',
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.',
          },
        ],
      },
    }    
  }

  render() {
      const { deckData } = this.state
    return (  
      <View>
      <Text>Welcome to Mobile Flashcards!</Text>
      <Text>What do you want to learn today?</Text>
      {Object.keys(deckData).map((key) => {
        const { title } = deckData[key];
        return <Text key={title}>Title: {title}</Text>
      })}
    </View>

    )
  }
}


export default Decks
