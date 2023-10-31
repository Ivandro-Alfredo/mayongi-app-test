import React, {useState} from 'react';


export const Listtask = () =>{
    return(
        <View style={styles.container}>
            <FlatList
                data={[
                {key: 'Tarefa Um'}]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            </View>
    )
}