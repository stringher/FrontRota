import React from "react";
import { Text } from "react-native";
import TitlePageTemplate from "../../components/TitlePageTemplate";


const CadastroScreen = (props) => {

    return (
        <TitlePageTemplate {...props} nome="" footerId={0} >
            <Text style={{ color: 'white' }}>Olá mundo</Text>
        </TitlePageTemplate>
    )

}

export default CadastroScreen;

