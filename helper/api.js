import { AsyncStorage } from 'react-native'
import { exportDecks, DECKS_STORAGE_KEY } from './_data'

export function fetchDesksResult () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(exportDecks)
}