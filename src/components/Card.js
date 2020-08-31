import React from 'react'
import {View, Image, StyleSheet , Text,ScrollView , Dimensions} from 'react-native'


const Card = (props)=>{
    return(
        
        <View style={styles.card}>
           
            <View style={styles.videoImageView}>
                <Image
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={styles.videoImage}
                />
            </View>
           
            <View style={styles.videoTextView}>
                <View style={{padding:8}}>
                    <Image
                    source={{uri:`https://yt3.ggpht.com/a/AATXAJysxC8KoT4V7kW0FaaceplRUBUFi5uoW_UAu7Lk8Q=s100-c-k-c0xffffffff-no-rj-mo`}}
                    style={styles.channelImage}
                    />
                </View>

                <View style={{padding:10}}>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.videoCaption}>{props.title}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.seconderyText}>{props.channel} . 2M watches . 2 year ago</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:300,
        elevation:5
    },
    videoImageView:{
       flex:5
    },
    videoTextView:{
        backgroundColor:'white',
        flex:2,
        flexDirection:'row'
    },
    videoImage:{
        width:'100%',
        height:'100%'
    },
    channelImage:{
        width:50,
        height:50,
        borderRadius:25,
    },
    videoCaption:{
        fontSize:14,
        fontWeight:'normal',
        width:Dimensions.get('screen').width - 70,
        
        
    },
    seconderyText:{
        color:'grey',
        width:Dimensions.get('screen').width - 70,
        fontSize:11
    }
})

export default Card;