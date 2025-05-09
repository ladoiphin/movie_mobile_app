import {View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

const SearchBar = () => {
    return (
        <View className="flex-row items-center bg-dark-200
        rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#AB8BFF" />
            <TextInput
                onPress={() => {}}
                placeholder="Search"
                value=""
                onChangeText={() => {}}
                placeholderTextColor="#A8B5DB"
                className="flex-1 ml"
            />
        </View>
    )
}
export default SearchBar
