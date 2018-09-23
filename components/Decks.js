import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { fetchDecksResults } from '../utils/api'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'
import DeckHeader from './DeckHeader'
import { white } from '../utils/colors'

class Decks extends Component {
  state = {
    ready: false    
  }

  componentDidMount () {
      const { dispatch } = this.props

      fetchDecksResults()
          .then((decks) => dispatch(receiveDecks(decks)))
          .then(()=> this.setState(() =>({ready: true})))
  }

  render() {
      const { deckData } = this.state
      const { decks, questions } = this.props
    return (  
      <View>
      {Object.keys(decks).map((key) => {
        return(
          <TouchableOpacity style={styles.item} key = {key} onPress={() => this.props.navigation.navigate('Deck', {key: key})}>
              <DeckHeader deckHeader={decks[key].title}/>
              <Text style={styles.Text}>
                # of questions: {decks[key].questions.length}
              </Text>
              </TouchableOpacity>
              )
            })}

    </View>

    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  Text: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}



export default connect(mapStateToProps)(Decks)
