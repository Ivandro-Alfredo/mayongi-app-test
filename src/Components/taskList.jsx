import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';

export const Listtask = () =>{
    const [switchText, setSwitchText] = useState('');

    const setSwitchText = ()=>{

    }

    return(
        <View style={styles.container}>
            {/* <FlatList
                data={[
                {key: 'Tarefa Um'}]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            /> */}
           <Text ></Text>
				<TextInput
					styles={stilo.input}
					placeholder='Insira a tarefa desejada'
					onChangeText={setSwitchText}
					value={switchText}
				/> 
        </View>
    )
}