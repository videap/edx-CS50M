import {Vibration} from 'react-native'

export default () => {
    console.log("Ooooooouuughhhuoh")
    Vibration.vibrate([0, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500])
}