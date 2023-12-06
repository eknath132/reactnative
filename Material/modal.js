import { StyleSheet, Text, View } from "react-native";
import { Button, Modal, Portal } from "react-native-paper"

export const MaterialModal = ({isOpen, isClose, handleAction, title, firstButton, secondButton}) => {
    return (
        <Portal>
            <Modal visible={isOpen} onDismiss={isClose} contentContainerStyle={{backgroundColor: '#ebd5f3', padding:20, borderRadius:8}} style={{alignItems:'center', justifyContent:'center'}}>
                <View style={styles.containerModal}>
                    <Text style={styles.textModal}>
                        {title}
                    </Text>
                    <View style={styles.containerButtonModal}>
                        <Button textColor='#000' mode='outlined' style={{borderColor:'#8f03fd'}} onPress={isClose}>
                            {firstButton}
                        </Button>
                        <View>
                            <Button textColor='#000' mode='outlined' style={{borderColor:'#8f03fd'}} onPress={handleAction}>
                                {secondButton}
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </Portal>
    )
}

const styles = StyleSheet.create({
    // MODAL
    containerModal: {
        // width:'100%',
        // alignItems:'center',
        // justifyContent:'center',
        // borderWidth:1,
        
    },
    textModal:{
        fontSize: 24,
        color:'#000'
        // fontWeight: '700'
    },
    containerButtonModal: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 20
    }
});