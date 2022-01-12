import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { getLivrosTestamento } from '../../services/ApiServices';
import SearchPageTemplate from "../../components/SearchPageTemplate";
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Scroll = styled.ScrollView`
    top: 40px;
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

const Buttom = styled.TouchableHighlight`
    width: 150px;
    height: 40px;
    margin-bottom: 10px;
    justify-content: center;
    background-color: rgba(19, 36, 64, 0.95);
    border-width: 1px;
    border-color: #BBBBBB;
    border-radius: 8px;
`

const StyledText = styled.Text`    
    color: #F6F6F6;
    font-size: 14px;
    font-family: Roboto_400Regular;
    text-align: center;
    
`;

const LivrosScreen = (props) => {

    const data = props?.route?.params;

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    const [list, setList] = React.useState([]);
    const [originalList, setOriginalList] = React.useState([]);

    React.useEffect(() => {
        getListaLivros()
    }, [])

    React.useEffect(() => {
        if (props.filter && props.filter.trim() !== '') {
            const result = originalList.filter(item => item.nome.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
            setList(() => [...result])
        } else {
            setList(() => [...originalList])
        }
    }, [props.filter])

    const getListaLivros = () => {
        getLivrosTestamento(data?.cod_testamento)
            .then(response => {
                setList(() => [...response])
                setOriginalList(() => [...response])
            })
    };

    const handleOnPress = (data) => {
        props.navigation.navigate('Capitulos', data)
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SearchPageTemplate  {...props} onSearch={(data) => setFilter(data)}>
                <Scroll showsVerticalScrollIndicator={false}>
                    <Container>
                        {
                            list?.map((item, index) =>
                                <Buttom key={index} onPress={() => handleOnPress(item)} >
                                    <StyledText>
                                        {item.nome_livro}
                                    </StyledText>
                                </Buttom>
                            )
                        }
                    </Container>
                </Scroll>
            </SearchPageTemplate>
        )
    }

}

export default LivrosScreen;

