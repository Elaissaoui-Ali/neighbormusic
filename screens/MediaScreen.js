import React from 'react';
import {View, StyleSheet, Text, Slider, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Header from "../components/Header";

const minStringToSec = (minString) => {
    if (minString.length !== 5) {
        return;
    }
    const minutes = Number((minString[0] + minString[1]));
    const seconds = Number((minString[3] + minString[4]));
    return seconds + minutes * 60;
};

const secToMinString = (seconds)=>{
    const minutes = Math.ceil(seconds / 60);
    const leftSeconds =  seconds - minutes * 60;
    return `${minutes}:${leftSeconds}`;
}

const MediaScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header goBack={props.navigation.goBack}/>
            <ImageBackground source={require('../assets/sound_wave.png')} style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                width: '100%'
            }}>
                <Image source={require('../assets/disk.png')} style={{height:'80%', width:null, aspectRatio:1}}/>
            </ImageBackground>
            <View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>With Strangers</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    opacity: 0.8
                }}>Little Joy</Text>
                <View style={{
                    width: '100%',
                    marginTop: 10
                }}>


                    <Slider
                        maximumValue={minStringToSec('03:45')}
                        minimumValue={0}
                        value={minStringToSec('01:32')}
                        thumbTintColor={'#FF1168'}
                        maximumTrackTintColor={'#EE0979'}
                        minimumTrackTintColor={'#FF6A00'}/>


                    <View style={{
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: 'white'
                        }}>
                            {'01:32'}
                        </Text>
                        <Text style={{
                            color: 'white'
                        }}>
                            03:45
                        </Text>
                    </View>
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity style={{
                            margin: 10,
                        }}>
                            <Image source={require('../assets/mp_previous.png')} style={{
                                height: 18,
                                width: null,
                                aspectRatio: 1
                            }}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 10,
                        }}>
                            <Image source={require('../assets/mp_seek_backward.png')} style={{
                                height: 18,
                                width: null,
                                aspectRatio: 91 / 52
                            }}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 10,
                        }}>
                            <Image source={require('../assets/mp_play_button.png')} style={{
                                height: 50,
                                width: null,
                                aspectRatio: 1
                            }}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 10,
                        }}>
                            <Image source={require('../assets/mp_seek_foreword.png')} style={{
                                height: 18,
                                width: null,
                                aspectRatio: 91 / 52
                            }}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 10,
                        }}>
                            <Image source={require('../assets/mp_next.png')} style={{
                                height: 18,
                                width: null,
                                aspectRatio: 1
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
        backgroundColor: '#341931'
    },
});


export default MediaScreen;
