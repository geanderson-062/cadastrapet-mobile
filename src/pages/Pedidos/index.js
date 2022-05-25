import React, {useContext} from 'react';
import { View, Text } from 'react-native';

//importando o context
import { AuthContext } from '../../contexts/auth'

//importando style
import styles from './style'

//pegando dados do auth
export default function Pedidos(){

  //trazendo propiedade nome e user
  const {nome, user} = useContext(AuthContext)

 return (
   <View style={styles.container}>
     <Text>Pagina Pedidos</Text>

     <Text>Nome: {nome}</Text>
     <Text>Email: {user.email}</Text>
     <Text>Status: {user.status}</Text>
   </View>
  );
}

