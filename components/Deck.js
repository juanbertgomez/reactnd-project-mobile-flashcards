import React from 'react'
import {View, Text, StyleSheet, Platform, Animated} from 'react-native'
import {Button} from 'react-native'
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import DeckHeader from './DeckHeader'


class Deck extends React.Component {

    state = {
        animate: new Animated.Value(0)
    }

    componentDidMount() {
        const {animate} = this.state
        Animated.timing(animate, {toValue: 1 , duration: 3000}).start()
    }

    render() {
        const {decks, deck, navigation} = this.props
        const {animate} = this.state
        const { key } = navigation.state.params 

        return (
            <Animated.View style={[styles.item, {...this.props.style, opacity: animate}]}>
                <DeckHeader deckHeader={deck.title}/>
                <Text style={styles.Text}>
                    # of questions: {deck.questions.length}
                </Text>  
                <Button 
                    style={styles.buttons} 
                    title="Start Quiz" 
                    onPress={() => this.props.navigation.navigate('Questions', {key: key})}
                >Start
                    Quiz</Button>
                <Text style={styles.fonts2}>Or</Text>
                <Button title='Add Question'
                        onPress={() => this.props.navigation.navigate('AddCard', {deck: deck, decks: decks, key: key})}>Add
                    Question To Deck</Button>
            </Animated.View>

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
  
  
  
export default connect(mapStateToProps)(Deck)