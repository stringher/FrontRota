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
    flex: 1;
    flex-direction: column;
    width: ${width - 50}px;
    padding: 0px;
    margin: 0px;
`;

const ContainerButton = styled.View`
    top: 25px;
    flex-direction: row;
    justify-content: space-between;
    width: ${width - 50}px;
`;

const Button = styled.TouchableOpacity`
    /* display: 'inline-flex'; */
    height: ${parseInt(width / 2) - 40}px;
    width: ${parseInt(width / 2) - 40}px;    
    border-radius: 8px;
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(49, 64, 88, 0.6);
`;

const StyledText = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 20px;
    color: #FBB03F;
    text-align: center;
`

const ImageContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 180;
    height: 180;
`;

const Image = styled.Image`
    flex:1;
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
                <ContainerButton>
                    {list.map((item, index) =>
                        <Button key={index} onPress={() => props.navigation.navigate('Livros', item)} >
                            <Image source={require('../../../assets/old-bible.jpg')} style={{ width: '100%', heigth: '100%', borderRadius: 4 }} />
                            <StyledText >{item.nome}</StyledText>
                        </Button>
                    )}
                </ContainerButton>
                <ImageContainer>
                    <Image source={require('../../../assets/logo1.png')} style={{ top: 150, left: 80, width: 150, heigth: 150 }} />
                </ImageContainer>
            </Container>
        )
    }
}

export default MenuLivros;