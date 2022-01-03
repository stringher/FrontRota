import React from "react";
import { Text } from "react-native";
import TitlePageTemplate from "../../components/TitlePageTemplate";


const CapitulosScreen = (props) => {

    return (
        <TitlePageTemplate {...props} nome="Capitulos" footerId={2} >
            <Text style={{ color: 'white' }}>Olá mundo</Text>
        </TitlePageTemplate>
    )

}

export default CapitulosScreen;

