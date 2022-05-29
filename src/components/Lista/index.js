import * as React from 'react';
import { Text, View, Button, StyleSheet, ScrollText } from 'react-native';
import useAxios from 'axios-hooks';

//import { Card } from 'react-native-paper';

export default function App() {
   const [{ data, loading, error }, refetch] = useAxios(
    'https://cadastrapet2022.000webhostapp.com/app/services/api.php',
    {
      manual: true,
    }
  )

  if (loading) return <Text>Carregando...</Text>
  if (error) return <ScrollText>{JSON.stringify(error, null, 2)}</ScrollText>

    return (
      <View style={styles.container}>
         <Button style={styles.button} onPress={()=> refetch({
          data: {
            delay: 2
          }
        })} title="Carregar dados"/>
        <Text style={styles.paragraph}>{JSON.stringify(data, null, 2)}</Text>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    padding: 8,

  },

  paragraph: {
    marginTop: 30,
    
  },

});