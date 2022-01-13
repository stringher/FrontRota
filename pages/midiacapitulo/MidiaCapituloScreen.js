import React from "react";
import styled from "styled-components/native";
import TitlePageTemplate from "../../components/TitlePageTemplate";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';
import { getMidiaCapitulo } from '../../services/ApiServices'

import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Container = styled.View`    
    background-color: #132440;
    /* align-items: left; */
    justify-content: flex-start;
    width: ${width - 50}px;
    height: ${height - 130}px;
`;

const Button = styled.TouchableOpacity`
    border-radius: 3px;
    padding-left: 8px;
    padding-right: 10px;    
    border-radius: 8px;
    height: 59px;
    align-items: center;
    justify-content: center;
    color:white;
`;

const Text = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
    font-family: Roboto_400Regular;
`

const MidiaCapituloScreen = (props) => {

    const data = props?.route?.params;

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        getListaMidiaCapitulo()
    }, [])


    const getListaMidiaCapitulo = () => {
        getMidiaCapitulo(data?.id_cap)
            .then(response => {
                setList(() => [...response.Midia])
            })
    };


    const handleOnPress = (data) => {
        props.navigation.navigate('Player', { clipId: data })
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TitlePageTemplate {...props} nome={data?.titulo_cap} footerId={2} >
                <Container>

                    {
                        list?.map((item, index) =>
                            <Button key={index} onPress={() => handleOnPress(item.id_Streaming)}>
                                <Text>{item.nome}</Text>
                            </Button>
                        )
                    }
                </Container>
            </TitlePageTemplate>
        )
    }
}

export default MidiaCapituloScreen;

