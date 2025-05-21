import {View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar= ({placeholder, onPress, value, onChangeText}: Props) => {
    return (
        <View className="flex-row items-center bg-dark-100
        rounded-full px-5 py-1">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#AB8BFF" />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#A8B5DB"
                className="flex-1 ml"
                selectionColor={'#877da8'}
                cursorColor={'#825ee8'}
                style={{color: '#ea8eff'}}
            />
        </View>
    )
}
export default SearchBar
