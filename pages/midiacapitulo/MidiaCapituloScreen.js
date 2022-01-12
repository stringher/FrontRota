import React from "react";
import styled from "styled-components/native";
import TitlePageTemplate from "../../components/TitlePageTemplate";
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';
import { getMidiaCapitulo } from '../../services/ApiServices'

import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Container = styled.View`    
    background-color: #132440;
    align-items: left;
    justify-content: left;
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

// const id_cap = props?.route?.params;

// const api = 'https://a2jkzcmh3p.us-east-2.awsapprunner.com/midia/midia_capitulo'
// const clipId = id_cap?.id_cap


const MidiaCapituloScreen = (props) => {

    // const [data, setData, list, setList] = React.useState()
    // const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    // React.useEffect(() => {
    //     const data = props?.route?.params;
    //     fetch(`${api}/${data?.clipId || clipId}`)
    //         .then((response) => response.json())
    //         .then((json) => setData(json));
    // }, [])

    const data = props?.route?.params;
    console.log('data =>', data)

    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, })

    const [list, setList] = React.useState([]);
    const [originalList, setOriginalList] = React.useState([]);

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
        props.navigation.navigate('Player', {clipId: data})
    }
    
    console.log(list)

    return(
        <TitlePageTemplate {...props} nome={data?.titulo_cap} footerId={2} >
            <Container> 
                
                {
                    list?.map((item, index) => 
                        <Button key={index} onPress={() => handleOnPress(item.id_Streaming)}>
                        {item.nome}
                        </Button>
                    )
                }
            </Container>
        </TitlePageTemplate>
        
    )
}

export default MidiaCapituloScreen;

