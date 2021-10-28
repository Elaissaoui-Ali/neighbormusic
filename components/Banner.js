import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import {BannerAd, BannerAdSize} from "@react-native-firebase/admob";
import { BannerView } from 'react-native-fbads';

const Banner = (props) => {
    const [banner, setBanner] = useState(<View/>);
    const {admobBannerId, facebookBannerId} = useSelector((s) => s.adsIdsReducer);
    const [fbActivated, setFbActivated] = useState(false);
    useEffect(() => {
        if (admobBannerId) {
            setBanner(<BannerAd
                unitId={admobBannerId}
                size={BannerAdSize.ADAPTIVE_BANNER}
                style={{backgroundColor: 'white'}}
                onAdFailedToLoad={(error => {
                    console.log("facebookBannerId will be activated");
                    setFbActivated(true);

                })}
            />)
        }

    }, [admobBannerId]);

    useEffect(()=>{
        if (facebookBannerId && fbActivated) {
            console.log("facebookBannerId activated");
            setBanner(
                <BannerView
                    placementId={facebookBannerId}
                    type="standard"
                    onPress={() => console.log('click')}
                    onLoad={() => console.log('loaded')}
                    onError={(err) => console.log('error', err)}
                    style={{width:'100%', backgroundColor: 'transparent'}}
                />
            );
        }
    },[fbActivated, facebookBannerId])

    return (<View style={styles.container}>
        {banner}
    </View>);
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },
});


export default Banner;
