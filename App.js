import React , { useState , useEffect} from 'react';
import { Text,
View,
StyleSheet,
Image,
ScrollView,
ActivityIndicator
} from 'react-native';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Formulario from './src/components/Formulario';
import axios from 'axios';
import Cotizacion from './src/components/Cotizacion';




const App = () =>{


    const [moneda,guardarMoneda] = useState('')
    const [criptomoneda,guardarCriptoMoneda] = useState('')
    const [consultarAPI,guardarConsultarAPI] = useState(false)
    const [ resultado,guardarResultado] = useState({});
    const [cargando,guardarCargando] = useState(false)


    useEffect(()=>{

        const cotizarCriptoMoneda = async () =>{

        if(consultarAPI){
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
            const resultado = await axios.get(url)


           guardarCargando(true)

            // Ocultar spinner y mostrar resultados

            setTimeout(() => {
              
               guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
               guardarConsultarAPI(false)
               guardarCargando(false)

            }, 3000);

            
        }

        
      }

      cotizarCriptoMoneda();


    },[consultarAPI])

//Mostrar el spinner


const componente = cargando ? <ActivityIndicator size='large' color='#4c669f' /> : <Cotizacion resultado={resultado}/>


    return (
      
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex: 1}}>
       <ScrollView  > 
        <View style={style.main}>
         
       <Header/>
       <Formulario
       moneda={moneda}
       criptomoneda={criptomoneda}
       guardarCriptoMoneda={guardarCriptoMoneda}
       guardarMoneda={guardarMoneda}
       guardarConsultarAPI={guardarConsultarAPI}
       
       />

       {componente}
          
    </View>
</ScrollView>
     </LinearGradient>
    
    );
  }



const style = StyleSheet.create({

texto:{
  fontSize:40,
  fontFamily:'outfit',
  color:'#1d1d1d',
  fontWeight:'bold'
},
main:{
  height:1030
}



})
export default App;