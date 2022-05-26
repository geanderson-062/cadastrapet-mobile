import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

//importando style
import styles from './style'

//importano os dados 
import { AuthContext } from '../../contexts/auth'

//importando os componentes
import Title_home from '../../components/Title_home/index'

export default function Home() {
  const navigation = useNavigation();

  //pegando os dados
  const {user} = useContext(AuthContext)

  return (

  <View style={styles.container}>
    
    <View style={styles.main}>
    <Title_home/>
     <Text style={styles.Bemvindo} >Bem vindo: {user.email}</Text>

     <Button
     
     title="Acessar pedidos"
     onPress={() => navigation.navigate("Pedidos")}
     />
    </View>

   </View>

  );
}

