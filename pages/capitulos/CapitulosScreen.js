import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import TitlePageTemplate from "../../components/TitlePageTemplate";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Scroll = styled.ScrollView`
    /* top: 40px; */
    position: relative;
    max-height: ${height - 180}px;
`

const Container = styled.View`
    flex: 1;    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;   
    width: ${width - 50}px;
    padding: 5px;
`

const Button = styled.TouchableOpacity`
    height: ${parseInt(width / 4) - 40}px;
    width: ${parseInt(width / 4) - 40}px;    
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: rgba(49, 64, 88, 0.6);
`;

const StyledText = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 18px;
    color: #F6F6F6;
    text-align: center;
    justify-content: center;
`

const CapitulosScreen = (props) => {

    return (
        <TitlePageTemplate {...props} nome="Capitulos" footerId={2} >
            <Scroll showsVerticalScrollIndicator={false}>
                <Container>
                    <Button >
                        <StyledText >{'1'}</StyledText>
                    </Button>
                </Container>
            </Scroll>
        </TitlePageTemplate>
    )

}

export default CapitulosScreen;

