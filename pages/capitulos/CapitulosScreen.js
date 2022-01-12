import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import TitlePageTemplate from "../../components/TitlePageTemplate";
import AppLoading from 'expo-app-loading';
import { getCapitulosByLivros } from '../../services/ApiServices';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

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
    const data = props?.route?.params;

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    const [list, setList] = React.useState([]);
    const [originalList, setOriginalList] = React.useState([]);

    React.useEffect(() => {
        getListaCapitulos()
    }, [])

    React.useEffect(() => {
        if (props.filter && props.filter.trim() !== '') {
            const result = originalList.filter(item => item.nome.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
            setList(() => [...result])
        } else {
            setList(() => [...originalList])
        }
    }, [props.filter])

    const getListaCapitulos = () => {
        getCapitulosByLivros(data?.id_livro)
            .then(response => {
                setList(() => [...response])
                setOriginalList(() => [...response])
            })
    };

    const handleOnPress = (data) => {
        props.navigation.navigate('MidiaCapitulo', data)
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TitlePageTemplate {...props} nome={data?.nome_livro ||"Capitulos"} footerId={2} >
                <Scroll showsVerticalScrollIndicator={false}>
                    <Container>
                        {
                            list?.map((item, index) =>
                                <Button key={index} onPress={() => handleOnPress(item)}>
                                    <StyledText>
                                        {item.num_cap}
                                    </StyledText>
                                </Button>
                            )
                        }
                    </Container>
                </Scroll>
            </TitlePageTemplate>
        )
    }


}

export default CapitulosScreen;

