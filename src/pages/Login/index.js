import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

//importando style
import styles from './style'

//importando os componentes
import Title_entrar from '../../components/Title_entrar/index'
import {Img_entrar} from '../../components/Img_entrar/index'
import Subtitle_entrar from '../../components/Subtitle_entrar/index'

//pegando os dados para o login
import {AuthContext} from '../../contexts/auth'

export default function Login() {
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');

 //usando o signin do auth
 const {signIn} = useContext (AuthContext);

 function handleLogin(){
  signIn(email, senha)
 }

 return (
 <View style={styles.container}>

    <Title_entrar/>
    <Img_entrar/>

  <View style={styles.formContext}>
   <View style={styles.form}>

     <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
     />

     <TextInput
        style={styles.input}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder="Digite sua senha"
     />

     <TouchableOpacity style={styles.buttonAcessar} onPress={handleLogin}>
       <Text style={styles.textbuttonAcessar}>Acessar</Text>
     </TouchableOpacity>

     <Subtitle_entrar/>
     
   </View>
  </View>
 </View>
  );
}

