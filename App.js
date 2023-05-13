import React , { useState , useEffect} from 'react';
import { Text,
View,
StyleSheet,
Image,
SafeAreaView
} from 'react-native';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Formulario from './src/components/Formulario';
import axios from 'axios';




const App = () =>{


    const [moneda,guardarMoneda] = useState('')
    const [criptomoneda,guardarCriptoMoneda] = useState('')
    const [consultarAPI,guardarConsultarAPI] = useState(false)


    useEffect(()=>{

        const cotizarCriptoMoneda = async () =>{

        if(consultarAPI){
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
            const resultado = await axios.get(url)
            console.log(resultado)

        }
      }

      cotizarCriptoMoneda();


    },[consultarAPI])











    return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex: 1}}>
       <Header/>
       <Formulario
       moneda={moneda}
       criptomoneda={criptomoneda}
       guardarCriptoMoneda={guardarCriptoMoneda}
       guardarMoneda={guardarMoneda}
       guardarConsultarAPI={guardarConsultarAPI}
       
       />
    
  
     </LinearGradient>
    );
  }



const style = StyleSheet.create({

texto:{
  fontSize:40,
  fontFamily:'outfit',
  color:'#1d1d1d',
  fontWeight:'bold'
}


})
export default App;