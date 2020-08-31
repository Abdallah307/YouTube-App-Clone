import React, { useState, useEffect } from 'react';
import {View , Text, ScrollView} from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card';
import SearchScreen from '../screens/SearchScreen';
import { FlatList } from 'react-native-gesture-handler';
import YouTubeDataService from '../Services/YouTubeDataService';
const Home = (props) => {

  const [homeData , setHomeData] = useState([])

  useEffect(()=>{
      YouTubeDataService.getHomeData()
      .then(res=>{
        setHomeData(res.data.items)
      })
  },[])
  return (
    <View style={{flex:1}}>
        <Header/>
        <FlatList
        data={homeData}
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
  )
};



export default Home;