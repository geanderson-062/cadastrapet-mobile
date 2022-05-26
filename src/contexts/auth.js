import React, { createContext, useState } from "react";

//importando a navegacao
import { useNavigation } from '@react-navigation/native'

//exportando para outro arquivo poder usar
export const AuthContext = createContext({})

function AuthProvider({children}){

    //fazendo os dados para o login
    const [user, setUser] = useState({});

    //navegacao para outra tela
    const navigation = useNavigation();

    function signIn(email, senha){

        //verificando se usuario e igual 
       if(email == 'gean' && senha == '123'){
           setUser({
               email: email,
               status: "Ativo"
           })
           
           //navegando o usuario para a home
           navigation.navigate("Home");
       }
       //se senha nem email nao forem iguais faca isso
       else{
           alert('Email ou senha invalidos!')
       }
    }

    //dados enviados
    return(
        <AuthContext.Provider value={{  signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;