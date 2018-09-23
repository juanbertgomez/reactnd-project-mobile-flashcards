import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Platform} from 'react-native'
import {saveDecks} from '../utils/_DATA'
import { white, purple } from '../utils/colors'
import { addQuestion } from '../actions'
import { connect } from 'react-redux'

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    createCard = () => {
        const { key } = this.props.navigation.state.params
        const { title } = this.props.deck.title
        const {question, answer} = this.state

        if (question != '' && answer!='') {
            this.props.dispatch(addQuestion({key, title, question, answer}))
        }

        this.props.navigation.navigate('Decks')
    }


    render() {

        const {question, answer} = this.state

        return (
            <View style={styles.item}>
                <Text>Add a question</Text>
                <TextInput value={question} onChangeText={(question) => this.setState({question})}/>
                <Text>Add an answer to your question</Text>
                <TextInput value={answer} onChangeText={(answer) => this.setState({answer})}/>
                <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}>
                    <Text style={styles.submitBtnText} onPress={this.createCard}>Submit</Text>
                </TouchableOpacity>
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

function mapStateToProps(decks, {navigation}) {
    const { key } = navigation.state.params 
    
    return {
        key,
        deck : decks[key],
        decks
    }
  }
  
  
  
export default connect(mapStateToProps)(AddCard)