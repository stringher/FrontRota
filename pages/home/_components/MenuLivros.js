import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

const lista = [
    { cod_testamento: 1, nome: "Antigo Testamento" },
    { cod_testamento: 2, nome: "Novo Testamento" },
]

const Container = styled.View`
    top: 25px;
    flex-direction: row;
    justify-content: space-between;
    width: ${width - 50}px;
`;

const Button = styled.TouchableOpacity`
    height: ${parseInt(width / 2) - 40}px;
    width: ${parseInt(width / 2) - 40}px;    
    border-radius: 8px;
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: rgba(49, 64, 88, 0.6);
`;

const StyledText = styled.Text`
    margin-top: 10px;
    font-family: 'Roboto_400Regular';
    font-size: 18px;
    color: #FBB03F;
    text-align: center;
`



const MenuLivros = (props) => {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    const [list, setList] = React.useState(lista);
    const [originalList, setOriginalList] = React.useState(lista);

    React.useEffect(() => {
        if (props.filter && props.filter.trim() !== '') {
            const result = originalList.filter(item => item.nome.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
            setList(() => [...result])
        } else {
            setList(() => [...originalList])
        }
    }, [props.filter])


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                {list.map((item, index) =>
                    <Button key={index} onPress={() => props.navigation.navigate('Livros', item)} >
                        <StyledText >{item.nome}</StyledText>
                    </Button>
                )}
            </Container>
        )
    }
}

export default MenuLivros;