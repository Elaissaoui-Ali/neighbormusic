import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Dimensions} from 'react-native';
import Header from "../components/Header";

const keysContainerWidth = Math.min(Dimensions.get('window').width, 430);


const Sound = require('react-native-sound');
Sound.setCategory('Playback');


const PianoScreen = (props) => {


    useEffect(() => {

    }, []);

    const renderWhiteKeys = () => {
        const whiteStep = keysContainerWidth / 7;
        return new Array(7).fill().map((v, i) => {
            return (
                <View key={'key' + i}>
                    <TouchableNativeFeedback onPressIn={()=>{
                        const white = new Sound('key_white_' + (i+1) + '.mp3', Sound.MAIN_BUNDLE, (error => {
                            if (error) {
                                console.log('error to load');
                                return;
                            }
                            white.play(success => {
                                white.release();

                            });
                        }));
                    }}>
                        <View style={{
                            width: whiteStep,
                            height: '100%',
                            backgroundColor: 'white',
                            borderWidth: 1,
                            borderColor: 'gray',
                            position: 'absolute',
                            left: i * whiteStep
                        }}/>
                    </TouchableNativeFeedback>

                    {[1, 3, 5, 6].some((el) => el === i) &&
                    <TouchableOpacity onPressIn={() => {
                        switch (i) {
                            case 1:
                                const black1 = new Sound('key_black_' + 1 + '.mp3', Sound.MAIN_BUNDLE, (error => {
                                    if (error) {
                                        return;
                                    }
                                    black1.play(success => {
                                        black1.release();
                                        });
                                }));
                                break;
                            case 3:
                                const black2 = new Sound('key_black_' + 2 + '.mp3', Sound.MAIN_BUNDLE, (error => {
                                    if (error) {
                                        return;
                                    }
                                    black2.play(success => {
                                        black2.release();
                                    });
                                }));
                                break;
                            case 5:
                                const black3 = new Sound('key_black_' + 3 + '.mp3', Sound.MAIN_BUNDLE, (error => {
                                    if (error) {
                                        return;
                                    }
                                    black3.play(success => {
                                        black3.release();
                                    });
                                }));
                                break;
                            case 6:
                                const black4 = new Sound('key_black_' + 4 + '.mp3', Sound.MAIN_BUNDLE, (error => {
                                    if (error) {
                                        console.log(error)
                                        return;
                                    }
                                    black4.play(success => {
                                        black4.release();
                                    });
                                }));
                                break;
                        }
                    }} style={{
                        width: whiteStep / 2,
                        height: '75%', position: 'absolute',
                        left: whiteStep * i - (whiteStep / 4),
                    }}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'black',
                        }}/>
                    </TouchableOpacity>
                    }

                </View>
            );
        });
    }

    useEffect(() => {
    }, [])
    return (
        <View style={styles.container}>
            <Header goBack={props.navigation.goBack}/>
            <View style={styles.keysContainer}>
                {renderWhiteKeys()}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#393939'
    },
    keysContainer: {
        width: keysContainerWidth,
        height: 225,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    }
});


export default PianoScreen;
