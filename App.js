import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from "./screens/SplashScreen";
import ContentScreen from "./screens/ContentScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as actions from './redux/actions';
import {useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';

const Stack = createNativeStackNavigator();


const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
      database().ref('/CPAIds')
          .on('value',
              (snapshot) => {
                  const ids = snapshot.val();
                  if (snapshot.hasChild('userId')) {
                      dispatch(actions.setCPAUserId(ids.userId));
                  }
                  if (snapshot.hasChild('apiKey')) {
                      dispatch(actions.setCPAApiKey(ids.apiKey));
                  }
                  console.log('CPA : get Ids successfully');
              });

      database().ref('/admobIds')
          .on('value',
              (snapshot) => {
                  const ids = snapshot.val();
                  if (snapshot.hasChild('bannerId')) {
                      dispatch(actions.setAdmobBannerId(ids.bannerId));
                  }
                  if (snapshot.hasChild('interstitialId')) {
                      dispatch(actions.setAdmobInterstitialId(ids.interstitialId));
                  }
                  console.log('admob : get Ids successfully');
              });

      database().ref('/fbadsIds')
          .on('value',
              (snapshot) => {
                  const ids = snapshot.val();
                  if (snapshot.hasChild('bannerId')) {
                      dispatch(actions.setFacebookBannerId(ids.bannerId));
                  }
                  if (snapshot.hasChild('interstitialId')) {
                      dispatch(actions.setFacebookInterstitialId(ids.interstitialId));
                  }
                  console.log('facebook : get Ids successfully');
              });

  }, []);

  return (
      <View style={{width: '100%', height: '100%'}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Splash'}>
            <Stack.Screen name={'Splash'} component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name={'Content'} component={ContentScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

export default App;
