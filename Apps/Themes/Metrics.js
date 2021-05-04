import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    smallMargin: 5,
    baseMargin: 10,
    halfTripleBaseMargin: 15,
    doubleBaseMargin: 20,
    halfQuintupleBaseMargin: 25,
    tripleBaseMargin: 30,
    quadrupleBaseMargin: 40,
    quintupleBaseMargin: 50,
    tabBarHeight: 60,
    borderRadiusSmall: 8,

    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    
}