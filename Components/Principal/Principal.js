import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { Button, Icon, List, Menu, Modal, Portal, TextInput } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { MaterialModal } from '../../Material/modal';
import RNPickerSelect from 'react-native-picker-select';

export default function Principal() {
    const [ lista, setLista ] = useState([])
    const [ valueInput, setValueInput ] = useState('')
    const [ isModalOpen, setIsOpenModal ] = useState(false)
    const [ removeItem, setRemoveItem ] = useState(null)
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const textInputRef = useRef(null); // Utiliza useRef para obtener una referencia al TextInput
    const items = [
        { label: 'Opción 1', value: 'opcion1' },
        { label: 'Opción 2', value: 'opcion2' },
        { label: 'Opción 3', value: 'opcion3' },
    ];

    const openMenu = () => {setVisible(true)};
    const closeMenu = () => setVisible(false);

    const handleMenuItemPress = (value) => {
        setSelectedValue(value);
        closeMenu();
    };

    const handleValueInput = (text) => {
        setValueInput(() => text)
    }

    const handleSetLista = () => {
        if(valueInput == '') {
        return null
        }
        setLista((prev) => ([...prev, {id: uuid.v4(), name: valueInput}]))
        setValueInput(() => '')
    }

    const eliminarItem = (itemComparar) => {
        const listaActualizada = lista.filter((item) => item.id !== itemComparar)
        setLista(() => listaActualizada)
        setIsOpenModal(prev => !prev)

    }

    const handleOpenModal = (idRemove) => {
        setRemoveItem(idRemove)
        setIsOpenModal(prev => !prev)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Curso de react native 2023</Text>
                <StatusBar style="auto" />
            </View>
            
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    label="Persona"
                    value={valueInput}
                    mode='outlined'
                    onChangeText={text => handleValueInput(text)}
                />
                <Button style={styles.button} mode="contained" onPress={() => handleSetLista()} >
                    Agregar
                </Button>
            </View>
            <View style={styles.lista}>
                <FlatList
                data={lista}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.containerLista} key={item.id}> 
                            <View> 
                                <List.Item
                                    title={item.name}
                                    left={props => <List.Icon {...props} icon='account' />}
                                />
                            </View>
                            <View> 
                                <Button icon='delete' onPress={() => handleOpenModal(item.id)}>
                                    Eliminar
                                </Button>
                            </View>
                        </View>
                    )
                }}
            />
            </View>
            <MaterialModal
                isOpen={isModalOpen}
                isClose={() => setIsOpenModal(false)}
                handleAction={() => eliminarItem(removeItem)}
                title={'Seguro que quiere borrar esta persona?'}
                firstButton={'No eliminar'}
                secondButton={'Eliminar'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#fcdbc8',
        alignItems: 'center',
    },
    text: {
        color:'black'
    },
    containerForm: {
        flexDirection: 'row',
        gap: 24,
        width: '100%',
        marginBottom: 16,
        marginTop: 16
    },
    input: {
        flex:3,
        fontSize:16,
        backgroundColor:'#fcdbc8'
    },
    button: {
        justifyContent:'center',
        flex:1
    },
    lista: {
        width:'100%',
        flex:1
    },
    containerLista: {
        flex:1,
        margin:4,
        borderRadius: 8,
        borderWidth:1 ,
        borderColor:'black',
        height: 50,
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textoLista: {
        fontSize: 16,
        textAlign:'center',
        lineHeight:50
    },
    botonEliminar: {
        position:'absolute',
        top:4,
        right:8
    }
});