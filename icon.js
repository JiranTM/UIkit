import Icon from 'react-native-vector-icons';
import { Platform } from 'react-native';

export default function Icon(props) {
    let iconFontSize = Platform.OS === "ios" ? 30 : 28
    return <Icon style={{fontSize: iconFontSize}} {...props} />
}