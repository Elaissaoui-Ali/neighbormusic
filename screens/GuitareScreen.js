import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from "../components/Header";
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

const GuitarScreen = (props) => {
    const playSound = (sound) => {
        const white = new Sound('guitar_' + (sound.toString()) + '.mp3', Sound.MAIN_BUNDLE, (error => {
            if (error) {
                console.log('error to load');
                return;
            }
            white.play(success => {
                white.release();
            });
        }));
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/guitare_bg.png')} style={{width:'100%', height:'100%', position:'absolute'}}/>
            <View style={{
                height:'100%',
                alignSelf:'center',
                flexDirection: 'row',
                position: 'absolute'
            }}>
                <TouchableOpacity onPressIn={()=>{playSound(1)}} style={{paddingHorizontal: 7}}>
                    <Image source={require('../assets/guitar_cord.png')} style={{width:null, height:'100%', aspectRatio:30/2447}}/>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{playSound(2)}} style={{paddingHorizontal: 7}}>
                    <Image source={require('../assets/guitar_cord.png')} style={{width:null, height:'100%', aspectRatio:30/2447}}/>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{playSound(3)}} style={{paddingHorizontal: 7}}>
                    <Image source={require('../assets/guitar_cord.png')} style={{width:null, height:'100%', aspectRatio:30/2447}}/>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{playSound(4)}} style={{paddingHorizontal: 7}}>
                    <Image source={require('../assets/guitar_cord.png')} style={{width:null, height:'100%', aspectRatio:30/2447}}/>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{playSound(5)}} style={{paddingHorizontal: 7}}>
                    <Image source={require('../assets/guitar_cord.png')} style={{width:null, height:'100%', aspectRatio:30/2447}}/>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{playSound(6)}} style={{paddingHorizontal: 7}}>
                    <Image source={require('../assets/guitar_cord.png')} style={{width:null, height:'100%', aspectRatio:30/2447}}/>
                </TouchableOpacity>
            </View>

            <Header goBack={props.navigation.goBack}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
    },
});


export default GuitarScreen;
