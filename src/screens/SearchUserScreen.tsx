import React from 'react'
import { View, Text, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput';

const SearchUserScreen = () => {

   const {top} = useSafeAreaInsets();

    return (
        <View style={{flex:1,marginTop:top +10, marginHorizontal:20 }}>

            <SearchInput></SearchInput>
        </View>
    )
}

export default SearchUserScreen
