import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Header = (props) => {
    const navigation = useNavigation()
  return (
    <View style={styles.header}>
        <View>
            <Image
             source={require('./youtubeIcon.png')} 
             style={styles.youtubeIcon}
             />
        </View>

        <View style={{flexDirection:'row',padding:10}}>
            <TouchableNativeFeedback onPress={()=>{navigation.navigate('SearchScreen')}}>
                <Image
                source={require('./searchIcon.png')} 
                style={styles.searchIcon}
                />
            </TouchableNativeFeedback>
           
             <Image
             source={require('./videoIcon.png')} 
             style={styles.videoIcon}
             />

            <Image
             source={require('./userIcon.png')} 
             style={styles.userIcon}
             />
         </View>
    </View>
  );
};



const styles = StyleSheet.create({
    header : {
        height:60,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5,
        shadowOffset:{width:5,height:5},
        shadowOpacity:1.0,
        shadowColor:'black',
        padding:5,
        marginTop:1
    },
    youtubeIcon:{
        width:120,
        height:50,
    },
    videoIcon:{
        width:35,
        height:35,
        marginRight:20,
        
    },
    searchIcon:{
        width:30,
        height:30,
        marginRight:20
    },
    userIcon:{
        width:30,
        height:30
    }
})


export default Header;