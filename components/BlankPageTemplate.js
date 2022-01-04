import React from "react";
import styled from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';
import Footer from './footer/Footer'


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

const BlankPageTemplate = (props) => {

  const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <AreaContainer>
          {props.children}
        </AreaContainer>
        <Footer {...props} id={props?.footerId} />
      </Container>
    )
  }
}

export default BlankPageTemplate;

