import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/AntDesign';
export default function Feed(props) {
    const [isLoading, setLoading] = useState(false)
    const [listData, setListData] = useState([]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 60 }}>
            <FlatList
                data={["1", "2", "3"]}
                renderItem={({ item }) => <View style={{
                    margin: 10, borderRadius: 5, elevation: 5, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.5, shadowRadius: 2
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Image source={require('../assests/Rectangle.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Name</Text>
                            <Text style={{ fontSize: 12 }}>{new Date().toString().substring(0, 16)}</Text>
                        </View>
                    </View>
                    <Text style={{ marginLeft: 30 }}>Write content of the post </Text>
                    <Image source={require('../assests/unsplash.png')} style={{ height: 200, width: '100%' }}></Image>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center',paddingLeft:50,paddingRight:50,height:50 }}>
                        <TouchableOpacity style={{ flexDirection:'row' ,justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('../assests/thumb.png')} />
                                <Text style={{ textAlign: 'center',marginLeft:10 }}>Like</Text>
                                <Image source={require('../assests/23k.png')} style={{marginLeft:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection:'row' ,justifyContent:'center',alignItems:'center'}}>
                           <Image source={require('../assests/comment.png')} />
                            <Text style={{ textAlign: 'center',marginLeft:10  }}>Comment</Text>
                            <Image source={require('../assests/(12).png')} style={{marginLeft:10}}/>
                        </TouchableOpacity>
                    </View>
                </View>}
                keyExtractor={(item) => (item)}
            />
        </View>
    )
}