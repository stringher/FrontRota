import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import SearchPageTemplate from "../../components/SearchPageTemplate";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const listNovoTestamento = [
    { id_livro: 1, nome: 'Romanos' },
    { id_livro: 2, nome: '1 Coríntios' },
    { id_livro: 3, nome: '2 Coríntios' },
    { id_livro: 4, nome: 'Gálatas' },
    { id_livro: 5, nome: 'Efésios' },
    { id_livro: 6, nome: 'Filipenses' },
    { id_livro: 7, nome: 'Colossenses' },
    { id_livro: 8, nome: '1 Tessalonicenses' },
    { id_livro: 9, nome: '2 Tessalonicenses' },
    { id_livro: 10, nome: '1 Timóteo' },
    { id_livro: 11, nome: '2 Timóteo' },
    { id_livro: 12, nome: 'Tito' },
    { id_livro: 13, nome: 'Filemon' },
    { id_livro: 14, nome: 'Hebreus' },
    { id_livro: 15, nome: 'Tiago' },
    { id_livro: 16, nome: '1 Pedro' },
    { id_livro: 17, nome: '2 Pedro' },
    { id_livro: 18, nome: '1 João' },
    { id_livro: 19, nome: '2 João' },
    { id_livro: 20, nome: '3 João' },
    { id_livro: 21, nome: 'Judas' },
    { id_livro: 22, nome: 'Apocalipse' },
]

const listVelhoTestamento = [
    { id_livro: 1, nome: 'Genesis' },
    { id_livro: 2, nome: 'Êxodo' },
    { id_livro: 3, nome: 'Levítico' },
    { id_livro: 4, nome: 'Josué' },
    { id_livro: 5, nome: 'Juízes' },
    { id_livro: 6, nome: 'Rute' },
    { id_livro: 7, nome: 'Samuel I' },
    { id_livro: 8, nome: 'Samuel II' },
    { id_livro: 9, nome: 'Rei I' },
    { id_livro: 10, nome: 'Reis II' },
    { id_livro: 11, nome: 'Crônicas I' },
    { id_livro: 12, nome: 'Crônicas II' },
    { id_livro: 13, nome: 'Esdras' },
    { id_livro: 14, nome: 'Neemias' },
    { id_livro: 15, nome: 'Ester' },
    { id_livro: 16, nome: 'Jó' },
    { id_livro: 17, nome: 'Salmo' },
    { id_livro: 18, nome: 'Provérbios' },
    { id_livro: 19, nome: 'Eclesiastes' },
    { id_livro: 20, nome: 'Cantares' },
    { id_livro: 21, nome: 'Isaias' },
    { id_livro: 22, nome: 'Jeremias' },
    { id_livro: 23, nome: 'Ezequiel' },
    { id_livro: 24, nome: 'Lamentações' },
    { id_livro: 25, nome: 'Daniel' },
    { id_livro: 26, nome: 'Oséias' },
    { id_livro: 27, nome: 'Joel' },
    { id_livro: 28, nome: 'Amós' },
    { id_livro: 29, nome: 'Jonas' },
    { id_livro: 30, nome: 'Obadias' },
    { id_livro: 31, nome: 'Miquéias' },
    { id_livro: 32, nome: 'Habacuque' },
    { id_livro: 33, nome: 'Ageu' },
    { id_livro: 34, nome: 'Zacarias' },

]



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
    padding: 10px;
`

const Buttom = styled.TouchableHighlight`
    width: 150px;
    height: 40px;
    margin-bottom: 10px;
    justify-content: center;
    background-color: rgba(19, 36, 64, 0.95);
    border-width: 1px;
    border-color: white;
    border-radius: 8px;
`

const StyledText = styled.Text`    
    color: #FBB03F;
    font-size: 14px;
    font-family: Roboto_400Regular;
    text-align: center;
    
`;

const LivrosScreen = (props) => {

    const data = props?.route?.params;

    return (
        <SearchPageTemplate >
            <Scroll showsVerticalScrollIndicator={false}>
                <Container>
                    {data?.id === 2 && listNovoTestamento.map((item, index) => <Buttom key={index} >
                        <StyledText>
                            {item.nome}
                        </StyledText>
                    </Buttom>)}
                    {data?.id === 1 && listVelhoTestamento.map((item, index) => <Buttom key={index} >
                        <StyledText>
                            {item.nome}
                        </StyledText>
                    </Buttom>)}
                </Container>
            </Scroll>
        </SearchPageTemplate>
    )

}

export default LivrosScreen;

