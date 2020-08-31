import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


const MiniCard = (props)=>{
    //this condition to hide the search results if another search is made
    if(!props.loading)
    return(
     
     <View>
         <View style={{flexDirection:'row',marginHorizontal:10,marginTop:10,marginBottom:5}}>
             <Image
              source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
              style={styles.miniImage}
             />

             <View style={styles.captionView}>
                 <Text 
                 ellipsizeMode='tail' 
                 numberOfLines={3} 
                 style={styles.captionText}
                 >{props.title} 
                 </Text>
                
                 <Text style={{color:'grey',fontSize:12}} ellipsizeMode='tail' numberOfLines={1}>{props.channel}</Text>
                 <Text style={{color:'grey',fontSize:12}} ellipsizeMode='tail' numberOfLines={1}>1 year ago . 2.7 Mr watches</Text>
             </View>

         </View>

     </View>
    )
    else return null
}

const styles = StyleSheet.create({
    miniImage:{
        height:100,
        flex:1,
        
    },
    captionView:{
        flex:1,
        marginLeft:5,
        
        
    },
    captionText:{
        fontSize:15,
        fontWeight:'normal'
    }
})

export default MiniCard;