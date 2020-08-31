import React,{useState, useEffect} from 'react';
import {View , Text , StyleSheet, TextInput ,Image, TouchableNativeFeedback, TouchableOpacity, ScrollView ,FlatList,ActivityIndicator} from 'react-native';
import MiniCard from '../components/MiniCard'
import YouTubeDataService from '../Services/YouTubeDataService';
// TODO: https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyCCW-72Zu0g-jqgy1aTEESOd0s5J88omkQ

const SearchScreen = (props)=>{
    const [value , setValue] = useState('')
    const [miniCardData , setMiniCard] = useState([])
    const [loading, setLoading] = useState(false)
    
    const fetchData = ()=>{
        setLoading(true)
        YouTubeDataService.getData(value)
        .then(res=>{
            setLoading(false)
            setMiniCard(res.data.items)
        })
        .catch(err=>{
            console.log(err)
        })
    }

   

   
    
    return(
        <View style={{flex:1}}>
            <View>
               
                <View style={styles.searchBarView}>
                    <TouchableOpacity style={{flexGrow:1}}  activeOpacity={0.1}>
                        <View style={{width:35,height:35,paddingTop:5}}>
                            
                            <TouchableNativeFeedback onPress={()=>{props.navigation.goBack()}}>
                                <Image
                                source={require('../components/arrowback.png')}
                                style={{width:'100%',height:'100%'}}
                                /> 
                            </TouchableNativeFeedback>
                            
                        </View>
                    </TouchableOpacity>
                <TextInput  onSubmitEditing={()=>fetchData()} value={value} onChangeText={text=>setValue(text)}  returnKeyType='search' style={styles.searchInput} placeholder="Search Youtube" />
            
                </View>
            
            </View>
            
              {
                  loading? <ActivityIndicator
                    style={{marginTop:10}}
                    size='large'
                    color='red'
                    /> : null
              }   
           
            <FlatList
            data={miniCardData}
            renderItem={({item})=>(
                <MiniCard
                loading={loading}
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                
                />
    )}      keyExtractor={item=>item.id.videoId}
            />
        
        </View>
     
    )
}



const styles = StyleSheet.create({
    searchBarView:{
        width:'100%',
        height:60,
        elevation:10,
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        backgroundColor:'red'
        
    },
    searchInput:{
        padding:10,
        width:'80%',
        backgroundColor:'lightgrey',
        borderRadius:3,
    }
})

export default SearchScreen;