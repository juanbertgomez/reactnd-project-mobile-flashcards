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
        i: 0
    }

    correctAnswer = (i) => {
        this.props.questions[this.state.i].correct = true
        i = i + 1
        this.setState({i: i})

    }

    incorrectAnswer = (i) => {
        this.props.questions[this.state.i].correct = false
        i = i + 1
        this.setState({i: i})
    }

    restartQuiz = (i) => {
        i = 0
        this.setState({
            i:i
        })
    }

    render() {

        let questionsRemaining = this.props.questions.length - this.state.i - 1

        const {questions} = this.props

        let i = this.state.i

        if (questions.length === i) {
            clearLocalNotification()
                .then(setLocalNotification)
            return (
                <View style={styles.container}>
                    <Text style={{fontSize:28}}> Your result is {questions.filter(q => q.correct).length}</Text>
                    <Text>You can restart the quiz by going back to deck</Text>
                    <Button title='Back to Deck' onPress={()=> this.props.navigation.goBack()}>Back</Button>
                    <Button title='Restart Quiz' onPress={() =>this.restartQuiz(i)}>Back</Button>
                </View>
            )
        }

        return (
            <View style={styles.container}>

                <View>
                    {/*     {questions.map((question, i)=> {
                     return (<Text key={i}>{question.question}</Text>)
                     })}*/}
                    <Text style={styles.fonts}>{questions[i].question}</Text>
                    <Button title='Show Answer'
                            onPress={() => this.props.navigation.navigate('Answer', {answer: questions[i].answer})}>Show
                        Answer</Button>
                </View>
                <Text>Do you know the answer?</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button style={[styles.buttons, {marginRight: 50}]} onPress={() => this.correctAnswer(i)} title='correct'>Correct</Button>
                    <Button style={styles.buttons} onPress={() =>this.incorrectAnswer(i)} title='incorrect'>Incorrect</Button>
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
