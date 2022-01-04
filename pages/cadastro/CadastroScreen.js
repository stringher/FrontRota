import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

import InputTextBox from '../../components/InputTextBox'
import TitlePageTemplate from "../../components/TitlePageTemplate";

const width = Dimensions.get('window').width;

const Container = styled.View`
    top: -50px;
    flex: 1;
    flex-direction: column;
    width: ${width - 50}px;
    padding: 0px;
    margin: 0px;
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
const StyledText2 = styled.Text`
    margin-top: 30px;
    text-align: center;
    color: white;
    font-size: 16px;
    font-family: Roboto_400Regular;
`

const StyledImage = styled.Image`
    top: -80px;
    left: ${parseInt(width / 2) - 100}px;
    width: 150px;
    height: 150px;
`

const CadastroScreen = (props) => {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TitlePageTemplate {...props} nome="" footerId={0} >
                <StyledImage source={require('../../assets/logo1.png')} />
                <Container>
                    <InputTextBox placeholder="Nome" />
                    <InputTextBox placeholder="Email" />
                    <InputTextBox placeholder="Data de Nascimento" />
                    <InputTextBox placeholder="Senha" />
                    <InputTextBox placeholder="Confirmar Senha" />
                    <Button>
                        <StyledText>
                            Salvar
                        </StyledText>
                    </Button>
                    <StyledText2>
                        Ou realizar login com
                    </StyledText2>
                </Container>
            </TitlePageTemplate>
        )
    }

}

export default CadastroScreen;

