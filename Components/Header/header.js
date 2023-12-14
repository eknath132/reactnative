import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"

export const Header = ({title = 'Home'}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        marginTop: 50,
        backgroundColor: '#21005d',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 24,

    }
})