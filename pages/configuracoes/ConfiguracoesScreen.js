import React from "react";
import { Text } from "react-native";
import TitlePageTemplate from "../../components/TitlePageTemplate";


const ConfiguracoesScreen = (props) => {

    return (
        <TitlePageTemplate {...props} nome="PlayList" footerId={2} >
            <Text style={{ color: 'white' }}>Olá mundo</Text>
        </TitlePageTemplate>
    )

}

export default ConfiguracoesScreen;

