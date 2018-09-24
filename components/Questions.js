import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import {Button} from 'react-native-elements'
import { connect } from 'react-redux'

import {
    clearLocalNotification,
    setLocalNotification,
} from '../utils/helpers'


class Questions extends React.Component {
    state = {
        score: 0
    }

    correctAnswer = (score) => {
        this.props.questions[this.state.score].correct = true
        score = score + 1
        this.setState({score: score})

    }

    incorrectAnswer = (score) => {
        this.props.questions[this.state.score].correct = false
        score = score + 1
        this.setState({score: score})
    }

    restartQuiz = (score) => {
        score = 0
        this.setState({
            score: score
        })
    }

    render() {

        let questionsRemaining = this.props.questions.length - this.state.i - 1

        const {questions} = this.props

        let score = this.state.score

        if (questions.length === score) {
            clearLocalNotification()
                .then(setLocalNotification)
            return (
                <View style={styles.container}>
                    <Text style={{fontSize:28}}> Your result is {questions.filter(q => q.correct).length}</Text>
                    <Text>You can restart the quiz by going back to deck</Text>
                    <Button title='Back to Deck' onPress={()=> this.props.navigation.goBack()}>Back</Button>
                    <Button title='Restart Quiz' onPress={() =>this.restartQuiz(score)}>Back</Button>
                </View>
            )
        }

        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.fonts}>{questions[score].question}</Text>
                    <Button title='Show Answer'
                            onPress={() => this.props.navigation.navigate('Answer', {answer: questions[score].answer})}>Show
                        Answer</Button>
                </View>
                <Text>Do you know the answer?</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button style={[styles.buttons, {marginRight: 50}]} onPress={() => this.correctAnswer(score)} title='correct'>Correct</Button>
                    <Button style={styles.buttons} onPress={() =>this.incorrectAnswer(score)} title='incorrect'>Incorrect</Button>
                </View>


                <Text>You have {questionsRemaining} questions left</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: 'orange',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        margin: 50,
        width: 120,
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    fonts: {
        fontSize: 28
    }
})

function mapStateToProps(decks, {navigation}) {
    const { key } = navigation.state.params 
    
    return {
        questions : decks[key].questions,
    }
  }
  
  
  
export default connect(mapStateToProps)(Questions)
