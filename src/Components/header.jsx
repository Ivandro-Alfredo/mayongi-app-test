import React from 'react'
import { View, Text, StatusBar} from 'react-native'
import { styles } from './../Style/headerStyle';

export const Header = () => {
    return (
      <View style={styles.headerBody}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Meu App</Text>
          <View style={styles.profileImage}>
            {/* adicionar a imagem de perfil */}
          </View>
        </View>
      </View>
    );
  };