import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const RisingBackground = (props) => {
    return (
        <View style={{...styles.container, top: `${100 - props.progress}%`}}>
            <Image source={require('../assets/sp_bg_rize.png')} style={{width: '150%', height: '150%'}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
});


export default RisingBackground;
