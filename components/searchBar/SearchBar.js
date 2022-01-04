import React from "react";
import styled from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

const width = Dimensions.get('window').width;

const Container = styled.SafeAreaView`
    /* top: 10px; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: "rgba(49, 64, 88, 0.6)";
    border-radius: 5px;
    width: ${width - 50}px;
    padding: 1px;

`;

const Button = styled.TouchableOpacity`
    border-radius: 3px;
    padding-left: 8px;
    padding-right: 10px;
`;

const Input = styled.TextInput`
    flex: 1;
    color: white;
    padding: 5px;
    font-family: Roboto_400Regular;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const SearchBar = (props) => {
    const [search, setSearch] = React.useState('');
    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                <Button onPress={() => props?.onSearch(search.trim())}>
                    <AntDesign name="search1" size={26} color="white" />
                </Button>
                <Input
                    onChangeText={(value) => setSearch(value)}
                    onSubmitEditing={() => props?.onSearch(search.trim())}
                    value={search}
                    keyboardType="ascii-capable"
                />
            </Container>
        )
    };
}

export default SearchBar;

