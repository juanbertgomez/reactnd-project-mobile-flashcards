import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        [action.deck.title.title]: {
          title: action.deck.title.title,
          questions: []
      }
      }
    case ADD_QUESTION :
      return {...state, 
        [action.question.key]: {
          title: state[action.question.key].title,
          questions: [
            ...state[action.question.key].questions,
            {
              question: action.question.question,
              answer: action.question.answer,
            },
          ],
        },
      }

    default :
      return state
  }
}

export default decks