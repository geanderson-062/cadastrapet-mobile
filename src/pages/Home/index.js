import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

//importando style
import styles from './style'

//importano os dados 
import { AuthContext } from '../../contexts/auth'

//importando os componentes


export default function Home() {
  const navigation = useNavigation();

  //pegando os dados
  const {user} = useContext(AuthContext)

  return (
   <View style={styles.container}>
     
     <Text>Bem vindo: {user.email}</Text>

     <Button 
     title="Acessar pedidos"
     onPress={() => navigation.navigate("Pedidos")}
     />
   </View>
  );
}

