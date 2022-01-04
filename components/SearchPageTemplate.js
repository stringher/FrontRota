import React from "react";
import styled from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { Dimensions } from "react-native";
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';
import SearchBar from './searchBar/SearchBar'
import Footer from './footer/Footer'

const width = Dimensions.get('window').width;

const Container = styled.View`
  flex: 1;  
  padding-top: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #132440;
`;

const AreaContainer = styled.View`
    flex: 1;
`;

const SearchPageTemplate = (props) => {

    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                <SearchBar {...props} onSearch={(data) => props.onSearch(data)} />
                <AreaContainer>
                    {props.children}
                </AreaContainer>
                <Footer {...props} id={props?.footerId} />
            </Container>
        )
    }
}

export default SearchPageTemplate;

