import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import Header from "../components/Header";
import {useSelector} from "react-redux";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const bodyHeight = screenHeight - 200;

const Sound = require('react-native-sound');
Sound.setCategory('Playback');

const DrumsScreen = (props) => {
    const [height, setHeight] = useState(screenHeight);
    const {cpaApiKey, cpaUserId} = useSelector(state => state.adsIdsReducer);

    const playSound = (sound) => {
        const white = new Sound('key_white_' + (sound.toString()) + '.mp3', Sound.MAIN_BUNDLE, (error => {
            if (error) {
                console.log('error to load');
                return;
            }
            white.play(success => {
                white.release();
            });
        }));
    }

    useEffect(() => {
        if (cpaApiKey && cpaUserId) {
            setHeight(bodyHeight);
        } else {
            setHeight(screenHeight);
        }
    }, [cpaApiKey, cpaUserId]);

    return (
        <View style={styles.container}>
            <Header goBack={props.navigation.goBack}/>

            <View style={{
                flex: 1,
                width: '100%',
            }}>
                <TouchableOpacity onPress={()=>{playSound(1)}} style={{
                    position: 'absolute',
                    alignSelf:'center',
                    bottom: height*0.28,
                }}>
                    <Image source={require('../assets/drum_main.png')} style={{
                        width: screenWidth/2,
                        height: null,
                        aspectRatio: 1,
                    }}/>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>{playSound(2)}} style={{
                    position: 'absolute',
                    left: 10,
                    bottom:height*0.48
                }}>
                    <Image source={require('../assets/drums_top_left.png')} style={{
                        width: null,
                        height: height / 6,
                        aspectRatio: 435 / 359,
                    }}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{playSound(3)}} style={{
                    position: 'absolute',
                    right: 10,
                    bottom:height*0.48,
                }}>
                    <Image source={require('../assets/drums_top_right.png')} style={{
                        width: null,
                        height: height / 6,
                        aspectRatio: 435 / 359,
                    }}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{playSound(4)}} style={{
                    position: 'absolute',
                    left: 10,
                    bottom: 0
                }}>
                    <Image source={require('../assets/drum_left_helper.png')} style={{
                        width: null,
                        height: height * 0.4,
                        aspectRatio: 541 / 936,
                    }}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{playSound(5)}} style={{
                    position: 'absolute',
                    right: 10,
                    bottom: 0
                }}>
                    <Image source={require('../assets/drums_right_helper.png')} style={{
                        width: null,
                        height: height * 0.4,
                        aspectRatio: 541 / 936,
                    }}/>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>{playSound(6)}} style={{
                    position: 'absolute',
                    left: screenWidth * 0.2,
                    bottom: 0
                }}>
                    <Image source={require('../assets/drums_bottom_left.png')} style={{
                        width: null,
                        height: height * 0.2,
                        aspectRatio: 344 / 389,
                    }}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{playSound(7)}} style={{
                    position: 'absolute',
                    right: screenWidth * 0.2,
                    bottom: 0
                }}>
                    <Image source={require('../assets/drums_bottom_right.png')} style={{
                        width: null,
                        height: height * 0.2,
                        aspectRatio: 344 / 389,
                    }}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#FF6E6E",
    },
});


export default DrumsScreen;
