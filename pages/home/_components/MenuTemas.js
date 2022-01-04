import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const mock = [
    { id_tema: 1, nome: "Casamento", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 2, nome: "Familia", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 3, nome: "Natal", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 4, nome: "Filhos", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 5, nome: "Pais", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 6, nome: "Casamento", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 7, nome: "Familia", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 8, nome: "Natal", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 9, nome: "Casamento", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 10, nome: "Familia", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 11, nome: "Natal", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 12, nome: "Filhos", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 13, nome: "Pais", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 14, nome: "Casamento", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 15, nome: "Familia", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
    { id_tema: 16, nome: "Natal", descricao: "descricao_do_tema", status: null, createdAt: "2021-12-14T13:41:17.000Z", updatedAt: "2021-12-14T13:41:17.000Z" },
];

const Scroll = styled.ScrollView`
    top: 40px;
    position: relative;
    max-height: ${height - 380}px;
`

const Container = styled.View`
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${width - 50}px;
`;

const Button = styled.TouchableHighlight`
    width: ${parseInt(width / 3) - 25}px;
    height: ${parseInt(width / 3) - 25}px;
    margin-bottom: 30px;
    justify-content: center;
    background-color: rgba(19, 36, 64, 0.95);
    border-width: 1px;
    border-color: white;
    border-radius: 8px;
`;

const StyledText = styled.Text`    
    color: #FBB03F;
    font-size: 14px;
    font-family: Roboto_400Regular;
    text-align: center;
    
`;

const MenuTemas = (props) => {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })

    // const [list, setList] = React.useState([]);
    const [list, setList] = React.useState(mock);
    const [originalList, setOriginalList] = React.useState(mock);

    React.useEffect(() => {
        if (props.filter && props.filter.trim() !== '') {
            const result = originalList.filter(item => item.nome.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
            setList(() => [...result])
        } else {
            setList(() => [...originalList])
        }
    }, [props.filter])

    const getList = () => {
        fetch('https://a2jkzcmh3p.us-east-2.awsapprunner.com/temas')
            .then(response => response.json())
            .then(response => {
                setList(() => [...response])
                setOriginalList(() => [...response])
            })
    };

    // React.useEffect(() => {
    //     getList()
    // }, [])

    const handleOnPress = (data) => {
        props.navigation.navigate('PlayList', data)
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Scroll showsVerticalScrollIndicator={false}>
                <Container>
                    {list?.map((item, index) =>
                        <Button
                            key={index}
                            activeOpacity={0.6}
                            underlayColor="gray"
                            onPress={() => handleOnPress(item)}
                        >
                            <StyledText>
                                {item.nome}
                            </StyledText>
                        </Button>
                    )}
                </Container>
            </Scroll>
        )
    }
}

export default MenuTemas;

