import { StyleSheet, Dimensions, Platform } from 'react-native';

const {height, width} = Dimensions.get('window');
const vh = height*0.01;
const vw = width*0.01;

const styles = {
    // container
    Container:{ height, width, justifyContent:"space-between" },
    // content
    Content:{ width, flex:1 },
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
    Toast: {width: "100%", position: "absolute", elevation: 9},
    // root
    Root: {},
    Item: {marginVertical: 10}
};

export { height, width, vh, vw };

export default styles;