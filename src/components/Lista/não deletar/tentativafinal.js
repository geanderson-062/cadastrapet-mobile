import React,{useEffect,useState}  from 'react';
import { Text, View, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import styles from './style'; 

export default function Listar() {
   const [carregando,setCarregando]=useState(true)
   const [dados,setDados]=useState([])

   useEffect(
     ()=>{

        fetch('https://cadastrapet2022.000webhostapp.com/app/services/api.php')

       .then((resp)=>resp.json())
       .then((json)=>setDados(json.animais))
       .catch(()=>(alert('erro a o carregar dados do json')))
       .finally(()=>setCarregando(false))
     },[]
   )
  
   return (

    <View style={styles.container}>
          {
            carregando ? <ActivityIndicator/> : (
              <FlatList
              data={dados}
              keyExtractor={({id},index)=>id} 
              renderItem={({item})=>(
                <Text>{item.nome},{item.raca},{item.endereco},{item.telefone},{item.responsavel}</Text>
              )}
              />
            )
          }
    </View>
   )
  }