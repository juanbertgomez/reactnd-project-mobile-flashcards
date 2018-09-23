import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'


class Answer extends React.Component {
    state = {
        i: 0
    }


    next = (i) => {
        i = i + 1
        i = i % this.props.navigation.state.params.questions.length
        this.setState({i: i})
    }

    render() {
        const {answer} = this.props.navigation.state.params

        const i = this.state.i
        return (
            <View style={styles.container}>
                <Text style={{fontSize:22}}>The correct answer is:</Text>
                <Text style={styles.colors}>{answer}</Text>

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
    colors: {
        color: 'green',
        fontSize: 28
    },
})

export default  Answer