import React from 'react';
import { Text,
View,
StyleSheet,
} from 'react-native';
import globalStyle from '../styles/globalStyles';


const Cotizacion = ({resultado}) =>{

  const colorTexto = resultado.CHANGEPCT24HOUR > 0 ? 'green' : 'red';

if(Object.keys(resultado).length === 0 ) return null;




    return (
      <View style={style.contenedor}>

        <Text style={[style.texto , style.precio]}>
              <Text style={style.span}>{resultado.PRICE}</Text>
        </Text>
        <Text style={style.texto}>Precio más alto del dia : {' '}
              <Text style={style.span}>{resultado.HIGHDAY}</Text>
        </Text>
        <Text style={style.texto}>Precio más bajo del dia :{' '}
              <Text style={style.span}>{resultado.LOWDAY}</Text>
        </Text>
        <Text style={style.texto}>Variación ultimás 24 hrs:{' '}
        <Text style={[style.span, {color: colorTexto}]}>{resultado.CHANGEPCT24HOUR} %</Text>
        </Text>
        <Text style={style.texto}>Ultima actuazlización :{' '}
              <Text style={style.span}>{resultado.LASTUPDATE}</Text>
        </Text>
        
      </View>
    );
  }
const style = StyleSheet.create({

contenedor:{
  ...globalStyle.contenedor,
  marginTop:20,
},
texto:{
  color:'#4c669f',
  fontSize:20,
  fontWeight:'bold',
  textAlign:'left'
},
precio:{
 color:'#1d1d1d',
 fontWeight:'bold',
 fontSize:40,
 marginBottom:10
},
span:{
  color:'#1d1d1d',
  fontWeight:'bold',
  textAlign:'right'
}


})
export default Cotizacion;