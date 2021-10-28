import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {getNewHeight} from "../tools/sizing";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{position: 'absolute', left: 24, top: 24}} onPress={() => {
                props.goBack();
            }}>
                <Image source={require('../assets/ic_back.png')} style={{width: 24, height: 24}}/>
            </TouchableOpacity>
            <Image source={require('../assets/txt_neighbor.png')}
                   style={{marginTop:20, width: 150, height: getNewHeight(984, 357, 150)}}/>
            <Image source={require('../assets/txt_music.png')}
                   style={{width: 100, height: getNewHeight(666, 333, 100)}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',

    },
});


export default Header;
