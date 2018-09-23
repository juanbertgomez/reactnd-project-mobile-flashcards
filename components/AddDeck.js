import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform, TextInput} from 'react-native'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'
import { white, purple } from '../utils/colors'
import { connect } from 'react-redux'
import DeckHeader from './DeckHeader'

function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
      </TouchableOpacity>
    )
  }

class AddDeck extends Component  {
    state = {
        title: ''
    }

    submit = () => {
        const title = this.state
    
        if (title != '') {
            this.props.addDeck
        }
        // Navigate to home
        this.toHome()
      }

    render() {
        const {title} = this.state

        return (
            <View style={styles.item}>
                <DeckHeader deckHeader = {'What is the Title of your new Deck?'} />
                <TextInput style={{height: 60,  borderColor: 'gray', borderWidth: 1, width: 100}} value={title}
                           placeholder='Add Deck Title' onChangeText={(title) => this.setState({title})}/>
                <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 40,
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
    colors: {
        color: 'red'
    },
    fonts: {
        fontSize: 34,
        textAlign: 'center',
    },
    fonts2: {
        fontSize: 28,
        textAlign: 'center',
    },
    buttons: {
        width: 300,
        marginBottom: 5,
        alignContent: 'space-between',
        color: 'green'
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
      },
      AndroidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
      },
      submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
      }
})
function mapStateToProps(decks) {
    
    return {
        decks
    }
  }
  
  
  
  function mapDispatchToProps(dispatch, { navigation }) {
    return {
      createDeck: deckName => {
        submitDeck(deckName)
          .then(() => {
            fetchDecksResults()
              .then(decks => {
                dispatch(setDecks(decks))
                navigation.goBack()
              })
              .catch(e => {
                console.log(e)
              })
          })
          .catch(e => {
            console.log(e)
          })
      }
    }
  }
  export default connect(false, mapDispatchToProps)(NewDeckScreen)