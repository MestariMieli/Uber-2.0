import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
    return(
        <SafeAreaView style={tw`bg-white h-full p-2`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: 'contain',
                    }}
                    source={require('../pictures/logo.png')}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details=null) => {
                        console.log(data);
                        console.log(details);
                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}

                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                
                <NavOptions/>
            </View>
        </SafeAreaView>
    );

};
export default HomeScreen;

const styles = StyleSheet.create({});