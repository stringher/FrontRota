import React from "react";
import styled from "styled-components/native";
import AudioPlayer from "../../components/AudioPlayer";
import TitlePageTemplate from "../../components/TitlePageTemplate";
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';

import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Container = styled.View`
    background-color: #132440;
    align-items: center;
    justify-content: center;
    top: -30px;
    width: ${width - 50}px;
    height: ${height - 180}px;
`;

const ImageContainer = styled.View`
    width: ${width - 50}px;
    height: ${width - 50}px;
    border-radius: 10px;
    border-width: 1px;
    border-color: white;
    margin-bottom: 25px;
`;

const AudioContainer = styled.View`
    /* margin-top: ${height - 250}px; */
    background-color: #132440;
    height: 70px;
    /* border-width: 1px;
    border-color: white; */
`;

const Label = styled.Text`
    font-size: 18px;
    font-family: RobotoCondensed_300Light;
    color: #F6F6F6;
    font-weight: 400;
    margin-bottom: 15px;
`

const url = 'https://traffic.omny.fm/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/19cc81e9-b5ee-4bfa-b607-ab95010bd308/fe9315e4-684c-4e8a-8b57-aba30117a422/audio.mp3'
const PlayerScreen = (props) => {

    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    const data = props?.route?.params;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TitlePageTemplate {...props} nome={""} footerId={0} >
                <Container>
                    <ImageContainer>
                    </ImageContainer>
                    <Label>
                        {props.label}
                    </Label>
                    <AudioContainer>
                        <AudioPlayer url={data?.url || url} />
                    </AudioContainer>
                </Container>
            </TitlePageTemplate>
        )
    }

}

export default PlayerScreen;

