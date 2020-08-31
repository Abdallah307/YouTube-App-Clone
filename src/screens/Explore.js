import React, { useState, useEffect } from 'react';
import {View, Text , StyleSheet} from 'react-native';
import Header from '../components/Header'
import { FlatList } from 'react-native-gesture-handler';
import YouTubeDataService from '../Services/YouTubeDataService';
import Card from '../components/Card';

const Explore = (props)=>{
    const [data , setData] = useState([])
    useEffect(()=>{
        YouTubeDataService.getHomeData()
        .then(res=>{
            setData(res.data.items)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return(
        <View style={{flex:1}}>
            <Header/>
            <ExploreHeader/>
            <View style={{flex:3}}>
            <FlatList
            data={data}
            renderItem={({item})=>(
            <Card
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            channelId={item.snippet.channelId}
          />
  )}
        keyExtractor={item=>item.id.videoId}
        />
            </View>
        </View>
    )
}

const ExploreHeader = (props)=>{
    return(
        <View style={styles.mainView}>
            <View style={styles.upperView}>
                    <View style={styles.exploreTypes}>
                        <Text style={styles.textStyle}>Music</Text>
                    </View>

                <View style={styles.exploreTypes}>
                    <Text style={styles.textStyle}>Games</Text>
                </View>
            
            </View>
           
            <View style={{...styles.exploreTypes,marginLeft:18}}>
                 <Text style={styles.textStyle}>Live</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'lightgrey',
        flex:1,
        justifyContent:'space-around'
    },
    upperView:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:5
    },
    exploreTypes:{
        backgroundColor:'yellow',
        padding:10,
        borderRadius:10,
        width:'40%',
        backgroundColor:'red',
    },
    textStyle:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    }
})

export default Explore;