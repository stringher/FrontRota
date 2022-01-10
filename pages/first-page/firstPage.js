import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

import BlankPageTemplate from "../../components/BlankPageTemplate";

const width = Dimensions.get('window').width;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: ${width - 50}px;
  padding: 0px;
  margin: 0px;
  justify-content: center;
`

const Button = styled.TouchableOpacity`
  border-radius: 3px;
  padding-left: 8px;
  padding-right: 10px;
  background-color: #FBB03F;
  border-radius: 8px;
  height: 59px;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 500;
  font-family: Roboto_400Regular;
`

const StyledImage = styled.Image`
  top: 180px;
  left: ${parseInt(width / 2) - 100}px;
  width: 150px;
  height: 150px;
`

const FirstPage = (props) => {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <BlankPageTemplate {...props} nome="" footerId={0} >
        <StyledImage source={require('../../assets/logo1.png')} />
        <Container>
          <Button onPress={() => props.navigation.navigate('Home')}>
            <StyledText>
              Entrar
            </StyledText>
          </Button>
        </Container>
      </BlankPageTemplate>
    )
  }
}

export default FirstPage;

