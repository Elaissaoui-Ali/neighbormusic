import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SplashProgress = (props) => {
    return (
        <View style={styles.container}>
            <View style={{...styles.progress, width: `${props.progress}%`}}/>
            <View style={styles.progressTextContainer}>
                <Text style={styles.progressText}>{`${props.progress}%`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 60,
        backgroundColor: '#BE1FB7',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        height: '100%',
        backgroundColor: '#FF00F5',
        borderRadius: 10,
        alignSelf:'flex-start'
    },
    progressText: {
        color: 'white',
        fontSize:30,
        fontWeight: 'bold'
    },
    progressTextContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default SplashProgress;
