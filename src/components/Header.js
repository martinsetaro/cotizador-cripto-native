import React from 'react';
import { Text,
View,
StyleSheet,
Platform,
Image
} from 'react-native';



const Header = () =>(


  <>
    <Image
    style={style.imagen}
    source={require('../assets/img/background.png')}/>

</>

);






const style = StyleSheet.create({

 imagen:{
   marginTop:Platform.OS === 'ios' ? 50 : 30,
   width:280,
   height:250,
   marginHorizontal:80
    
}

})
export default Header;