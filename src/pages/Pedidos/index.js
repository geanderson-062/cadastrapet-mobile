import React from 'react';
import { View } from 'react-native';

//importando style
import styles from './style'

//importando a lista
import Lista from '../../components/Lista/index'

//pegando dados do auth
export default function Pedidos(){

 return (
   <View style={styles.container}>
  
       <Lista/>

   </View>
  );
}

