import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RisingBackground from "../components/RisingBackground";
import SplashProgress from "../components/SplashProgress";
import Banner from "../components/Banner";

const SplashScreen = (props) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            setTimeout(() => {
                setProgress(previous => Math.min(previous + (1 + Math.floor(Math.random()*4)), 100));
            }, 100);
        } else{
            setTimeout(() => {
                props.navigation.replace('Content');
            }, 1500);
        }
    }, [progress]);
    return (
        <View style={styles.container}>
            <RisingBackground progress={progress}/>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/txt_neighbor.png')} style={{width: 300, maxHeight:100, resizeMode:'contain'}}/>
                <Image source={require('../assets/txt_music.png')} style={{width: 280, maxHeight:80, resizeMode:'contain'}}/>
                <Image source={require('../assets/sp_logo.png')} style={{width: 300, height:300, resizeMode:'contain'}}/>
            </View>
            <SplashProgress progress={progress}/>
            <Banner/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EE00FF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default SplashScreen;
