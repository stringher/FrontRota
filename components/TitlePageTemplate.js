import React from "react";
import styled from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { Dimensions, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';
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

const HeaderContainer = styled.TouchableHighlight`
  height: 75px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
`;

const ButtonContainer = styled.View`
  top: 20px;
  flex-direction: row;
  width: ${width - 50}px;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledText = styled.Text`
  color: white;
  /* margin-left: ${parseInt((width - 100) / 2 - 24)}px; */
  text-align: center;
  font-size: 24px;
  font-family: RobotoCondensed_300Light;
  line-height: 28px;
`;

const AreaContainer = styled.View`
    flex: 1;
`;

const TitlePageTemplate = (props) => {

    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                <HeaderContainer onPress={() => props.navigation.goBack(null)} >
                    <ButtonContainer>
                        <AntDesign name="arrowleft" size={27} color="white" />
                        <StyledText>{props?.nome}</StyledText>
                        <StyledText></StyledText>
                    </ButtonContainer>
                </HeaderContainer>
                <AreaContainer>
                    {props.children}
                </AreaContainer>
                <Footer {...props} id={props?.footerId} />
            </Container>
        )
    }
}

export default TitlePageTemplate;

