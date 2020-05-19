import { StyleSheet, Dimensions, Platform } from 'react-native';

const {height, width} = Dimensions.get('window');
const vh = height*0.01;
const vw = width*0.01;

const styles = {
    // content
    Content:{ flex:1 },
    // header
    Header:{ width, height:vh*10, backgroundColor:"#F6F6F6", flexDirection:'row' },
    Left:{ alignSelf:"center", alignItems:'flex-start', flex: 1 }, 
    Right: { alignSelf:"center", alignItems:'flex-end', flex: 1 },
    Body:{ alignSelf:"center", alignItems:'center', flex: 1 },
    // text
    Text: {},
    H1: {fontSize: 27, lineHeight: 32},
    H2: {fontSize: 24, lineHeight: 27},
    H3: {fontSize: 21, lineHeight: 25},
    // button
    Button: {paddingVertical: 6, borderWidth: null, height: 45, flexDirection: "row", elevation: 2, borderRadius: 2, shadowColor: '#000', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 1.2, alignItems: 'center', justifyContent: "space-between", alignSelf: "flex-start" },
    // radio
    Radio: {color: '#3F51B5'},
    // row, col
    Row: {flexDirection: "row", flex: 1, alignSelf: "stretch"},
    Col: {flexDirection: "column", flex: 1, alignSelf: "stretch"},
    // root
    Root: {},
    Item: {borderWidth: 0.5, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, borderColor: "#D9D5DC", backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', marginLeft: 2},
    // Textarea
    Textarea: {color: "#000", paddingLeft: 10, paddingRight: 5, fontSize: 15, textAlignVertical: 'top'},
    // Badge
    Badge: {paddingHorizontal: 6, alignSelf: "flex-start", borderRadius: 13.5, height: 27}
};

export { height, width, vh, vw };

export default styles;