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
    top: -30px;
    background-color: #132440;
    align-items: center;
    justify-content: center;
    width: ${width - 50}px;
    height: ${height - 130}px;
`;


const AudioContainer = styled.View`
    /* margin-top: ${height - 250}px; */
    top: -10px;
    background-color: #132440;
    height: 110px;
    /* border-width: 1px;
    border-color: white; */
`;

const Label = styled.Text`
    top: -20px;
    font-size: 18px;
    font-family: RobotoCondensed_300Light;
    color: #F6F6F6;
    font-weight: 400;
    margin-bottom: 15px;
`

const ImageContainer = styled.View`
    top: -40px;
    align-items: center;
    justify-content: center;
    width: ${width - 80}px;
    height: ${width - 80}px;
    margin-bottom: 25px;
`;

const Image = styled.Image`
    flex:1;
    border-radius: 8px;
`

// const AudioUrl = 'https://traffic.omny.fm/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/19cc81e9-b5ee-4bfa-b607-ab95010bd308/fe9315e4-684c-4e8a-8b57-aba30117a422/audio.mp3'
// const ImageUrl = 'https://www.omnycontent.com/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/19cc81e9-b5ee-4bfa-b607-ab95010bd308/fe9315e4-684c-4e8a-8b57-aba30117a422/image.jpg?size=Medium'


const api = 'https://omny.fm/api/orgs/f895e4af-2068-409d-a7a7-aa9201219358/clips/'
const clipId = 'fe9315e4-684c-4e8a-8b57-aba30117a422'


const PlayerScreen = (props) => {

    const [data, setData] = React.useState()
    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    React.useEffect(() => {
        const data = props?.route?.params;
        fetch(`${api}/${data?.clipId || clipId}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [])


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TitlePageTemplate {...props} nome={""} footerId={0} >
                <Container>
                    <ImageContainer>
                        {data?.ImageUrl && <Image source={{ uri: data?.ImageUrl }} style={{ width: 305, height: 159 }} />}
                    </ImageContainer>
                    <Label>
                        {data?.Title}
                    </Label>
                    <AudioContainer>
                        {data?.AudioUrl && <AudioPlayer url={data?.AudioUrl} />}
                    </AudioContainer>
                </Container>
            </TitlePageTemplate>
        )
    }

}

export default PlayerScreen;

