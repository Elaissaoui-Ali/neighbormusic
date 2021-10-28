import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from "./MainScreen";
import CPABanner from "../components/CPABanner";
import Banner from "../components/Banner";
import GuitarScreen from "./GuitareScreen";
import DrumsScreen from "./DrumsScreen";
import MediaScreen from "./MediaScreen";
import PianoScreen from "./PianoScreen";


const Stack = createNativeStackNavigator();

const ContentScreen = (props) => {

    return (
        <View style={styles.container}>
            <CPABanner/>
            <View style={{flex: 1, width: '100%'}}>
                <Stack.Navigator initialRouteName={'Main'}>
                    <Stack.Screen name={'Main'} component={MainScreen} options={{headerShown: false}}/>
                    <Stack.Screen name={'Guitar'} component={GuitarScreen} options={{headerShown: false}}/>
                    <Stack.Screen name={'Drums'} component={DrumsScreen} options={{headerShown: false}}/>
                    <Stack.Screen name={'Piano'} component={PianoScreen} options={{headerShown: false}}/>
                    <Stack.Screen name={'Media'} component={MediaScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </View>
            <Banner/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})

export default ContentScreen;
