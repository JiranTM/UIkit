import { StyleSheet, Dimensions, Platform } from 'react-native';

const {height, width} = Dimensions.get('window');
const vh = height*0.01;
const vw = width*0.01;

const styles = {
    // content
    Content:{ flex:1 },
    // header
    Header:{ width, height:vh*10, backgroundColor:"#F6F6F6", flexDirection:'row' },
    Side:{ height:'100%', justifyContent:"center", alignItems:'center', flex:1 }, 
    Body:{ height:'100%', justifyContent:"center", alignItems:'center', flex:6 },
    // text
    Text: {},
    H1: {fontSize: 27, lineHeight: 32},
    H2: {fontSize: 24, lineHeight: 27},
    H3: {fontSize: 21, lineHeight: 25},
    // button
    Button: {paddingVertical: 6, paddingHorizontal: 16, borderWidth: 1, height: 45, flexDirection: "row", elevation: 2, alignItems: 'center', borderRadius: 2, },
    // radio
    Radio: {color: '#3F51B5'},
    // row, col
    Row: {flexDirection: "row", flex: 1, alignSelf: "stretch"},
    Col: {flexDirection: "column", flex: 1, alignSelf: "stretch"},
    // toast
    Toast: {width: "100%", position: "absolute", elevation: 9, flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, minHeight: 50},
    // root
    Root: {},
    Item: {marginVertical: 10},
    // Textarea
    Textarea: {color: "#000", paddingLeft: 10, paddingRight: 5, fontSize: 15, textAlignVertical: 'top'},
    // Badge
    Badge: {paddingHorizontal: 6, alignSelf: "flex-start", borderRadius: 13.5, height: 27}
};

export { height, width, vh, vw };

export default styles;