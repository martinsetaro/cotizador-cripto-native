import React, { useState, useEffect} from 'react';
import { Text,
View,
StyleSheet,
TouchableHighlight,
Alert
} from 'react-native';
import globalStyle from '../styles/globalStyles';
import {Picker} from '@react-native-picker/picker';
import  axios from 'axios' 

const Formulario = ({moneda,criptomoneda,guardarMoneda,guardarCriptoMoneda,guardarConsultarAPI}) =>{


    const [ criptomonedas,guardarCriptoMonedas]= useState([])

    useEffect(()=>{
 
         const consultarApi = async () => {
 
             const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
             
             const resultado = await axios.get(url);
             guardarCriptoMonedas(resultado.data.Data)
         }

         consultarApi();


    },[])


    const obtenerMoneda = (moneda)=>{
        guardarMoneda(moneda)
    }

    const obtenerCriptoMoneda = (cripto)=>{
        guardarCriptoMoneda(cripto)
    }

    const cotizarPrecio = ()=>{
    if(moneda.trim() === '' || criptomoneda.trim() === ''){
        mostrarAlerta();
        return;
    }

    guardarConsultarAPI(true)

    }


    const mostrarAlerta = () =>{
         Alert.alert(
            "Error...",
            "Ambos campos son obligatorios",
            [{ text:"Ok"}]
         )
    }



    return (
      <View style={style.contenedor}>
        <Text style={style.label}>Moneda</Text>
        <Picker
       selectedValue={moneda}
        onValueChange={ moneda => obtenerMoneda(moneda)}
        >
            <Picker.Item label="--- Seleccionar ---" value=''/>
            <Picker.Item label="Dolar US" value='USD'/>
            <Picker.Item label="Yenes" value='JPY'/>
            <Picker.Item label="Euro" value='EUR'/>
            <Picker.Item label="Libra Esterlina" value='GBP'/>

        </Picker>


        <Text style={style.label}>Criptomoneda</Text>
        
         <Picker
        
         selectedValue={criptomoneda}
         onValueChange={cripto => obtenerCriptoMoneda(cripto)}
         >
         <Picker.Item label="--- Seleccionar ---" value=''/>
         {criptomonedas.map( cripto => (
                <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
   

         )) }



         </Picker>

         <TouchableHighlight 
         onPress={ ()=> cotizarPrecio()}
         style={style.btnCotizar}>
            <Text style={style.textoCotizar}>
                Cotizar
            </Text>
         </TouchableHighlight>


      </View>
    );
  }



const style = StyleSheet.create({
    contenedor:{
     ...globalStyle.contenedor,
     height:450
    },
    label:{
        fontFamily:'outfit',
        textTransform:'uppercase',
        fontSize:22,
        marginVertical:20,
        fontWeight:'700',
        marginLeft:10

    },
    btnCotizar:{
        backgroundColor:'#5e49e2',
        padding:10,
        marginTop:40
    },
    textoCotizar:{
      color:'#fff',
      fontSize:20,
      fontFamily:'outfit',
      textTransform:'uppercase',
      textAlign:'center',
      fontWeight:'bold'
    },
    
})
export default Formulario;