import React from 'react';
import {View, StyleSheet, Image,Dimensions, TouchableOpacity} from 'react-native';
import RisingBackground from "../components/RisingBackground";
const frame = {width:Dimensions.get('window').width, height: Dimensions.get('window').height}
const MainScreen = (props) => {
    return (
        <View style={styles.container}>
            <RisingBackground progress={100}/>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/sp_logo.png')}
                       style={{width: 100, height: null, aspectRatio: 1}}/>
                <Image source={require('../assets/txt_neighbor.png')}
                       style={{width: 150, height: null, aspectRatio: 984 / 357}}/>
                <Image source={require('../assets/txt_music.png')}
                       style={{width: 110, height: null, aspectRatio: 666 / 333}}/>
            </View>
            <View style={{
                width: '100%',
                flex: 1,
            }}>
                <View style={{
                    width: '100%',
                    flex: 1 / 2,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: '100%',
                        flex: 1 / 2,
                        alignItems:'flex-end',
                        justifyContent: 'flex-end'
                    }}>
                       <TouchableOpacity onPress={()=>{
                           props.navigation.push('Guitar')
                       }}>
                           <Image source={require('../assets/ic_guitar.png')}
                                  style={{
                                      height:'100%',
                                      width:null,
                                      maxHeight:190,
                                      aspectRatio:558/663
                                  }}/>
                       </TouchableOpacity>
                    </View>
                    <View style={{
                        height: '100%',
                        flex: 1 / 2,
                        justifyContent: 'flex-end',
                        alignItems:'flex-start'
                    }}>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.push('Drums')
                        }}>
                            <Image source={require('../assets/ic_drums.png')}
                                   style={{
                                       height:'100%',
                                       width:null,
                                       maxHeight:190,
                                       aspectRatio:558/663
                                   }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    flex: 1 / 2,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: '100%',
                        flex: 1 / 2,
                        alignItems:'flex-end',
                        justifyContent: 'flex-start'
                    }}>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.push('Piano')
                        }}>
                            <Image source={require('../assets/ic_piano.png')}
                                   style={{
                                       height:'100%',
                                       width:null,
                                       maxHeight:190,
                                       aspectRatio:558/663
                                   }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: '100%',
                        flex: 1 / 2,
                    }}>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.push('Media')
                        }}>
                            <Image source={require('../assets/ic_music.png')}
                                   style={{
                                       height:'100%',
                                       width:null,
                                       maxHeight:190,
                                       aspectRatio:558/663
                                   }}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FC67FA',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navigationContainer: {
        width: '90%',
        maxWidth: 420,
    },
    navigationRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});


export default MainScreen;
