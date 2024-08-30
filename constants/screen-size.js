import { Dimensions } from 'react-native';

const screenSize = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export{
    screenSize
}