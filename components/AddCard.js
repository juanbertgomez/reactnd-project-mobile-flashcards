import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Platform} from 'react-native';
import {saveDecks} from '../utils/_DATA';
import { white } from '../utils/colors'

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    };

    createCard = () => {
        const {deck, decks} = this.props.navigation.state.params;

        const {question, answer} = this.state;

        deck.questions.push({question: question, answer: answer});

        saveDecks(decks);

        this.props.navigation.navigate('Decks');
    };


    render() {

        const {question, answer} = this.state;

        return (
            <View style={styles.item}>
                <Text style={styles.fonts2}>Add a new Card to this Deck</Text>

                <Text>Add a question</Text>
                <TextInput value={question} onChangeText={(question) => this.setState({question})}/>
                <Text>Add an answer to your question</Text>
                <TextInput value={answer} onChangeText={(answer) => this.setState({answer})}/>
                <TouchableOpacity>
                    <Text onPress={this.createCard}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    };
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
    }
});

export default  AddCard;