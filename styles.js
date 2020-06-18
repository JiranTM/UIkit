import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const vh = height * 0.01;
const vw = width * 0.01;

const styles = {
    // Anatomy
    Container: {flex: 1},
    Content: {flex: 1},
    Header: { 
        width, 
        height:vh * 10, 
        backgroundColor:"#F6F6F6", 
        flexDirection:'row' 
    },
    Left: { 
        alignSelf:"center", 
        alignItems:'flex-start', 
        flex: 1 
    }, 
    Right: { 
        alignSelf:"center", 
        alignItems:'flex-end', 
        flex: 1 
    },
    Body: { 
        alignSelf:"center", 
        alignItems:'center', 
        flex: 1 
    },

    // Icon
    Icon: {fontSize: 28},

    // Typography
    Text: {fontSize: 16},
    H1: {fontSize: 27, lineHeight: 32},
    H2: {fontSize: 24, lineHeight: 27},
    H3: {fontSize: 21, lineHeight: 25},

    // Button
    Button: {
        paddingVertical: 6, 
        paddingHorizontal: 16,
        border: "none", 
        height: 45, 
        flexDirection: "row", 
        elevation: 2, 
        borderRadius: 2, 
        shadowColor: '#000', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 1.2, 
        alignItems: 'center', 
        justifyContent: "space-between", 
        alignSelf: "flex-start" 
    },
    BorderedButton: {
        elevation: null,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        backgroundColor: 'transparent',

    },
    ButtonProps: {
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
    },
    buttonBg: "#3F51B5",
    buttonDisabledBg: "#B5B5B5",
    buttonLightBg: "#A9A9A9",
    buttonPrimaryBg: "#3F51B5",
    buttonSuccessBg: "#5CB85C",
    buttonInfoBg: "#62B1F6",
    buttonWarningBg: "#F0AD4E",
    buttonDangerBg: "#D9534F",
    buttonDarkBg: "#000",

    // Radio
    Radio: {color: '#3F51B5'},

    // Layout
    Row: {flexDirection: "row", flex: 1, alignSelf: "stretch"},
    Col: {flexDirection: "column", flex: 1, alignSelf: "stretch"},

    // Form
    Item: {
        borderWidth: 0.5, 
        borderTopWidth: 0, 
        borderRightWidth: 0, 
        borderLeftWidth: 0, 
        borderColor: "#D9D5DC", 
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: 2
    },
    
    // Textarea
    Textarea: {
        color: "#000", 
        paddingLeft: 10, 
        paddingRight: 5, 
        fontSize: 15, 
        textAlignVertical: 'top'
    },

    // Badge
    Badge: {
        paddingHorizontal: 6, 
        alignSelf: "flex-start", 
        borderRadius: 13.5, 
        height: 27,
    },
    BadgeProps: {
        color: "#fff",
        fontSize: 15,
        lineHeight: 24,
        textAlign: "center",
        paddingHorizontal: 3,
    },
    badgeBg: "#ED1727",

    // Color
    brandPrimary: '#3F51B5',
    brandInfo: '#62B1F6',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandDark: '#000',
    brandLight: '#a9a9a9',
};

export { height, width, vh, vw };

export default styles;