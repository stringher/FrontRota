import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import SearchPageTemplate from "../../components/SearchPageTemplate";

const width = Dimensions.get('window').width;

const list = [
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

const Container = styled.View`
    flex: 1;    
    flex-direction: row;
    flex-wrap: wrap;
    width: ${width - 50}px;
    /* right: 10px; */
    justify-content: space-between;   
    padding: 10px;
`

const Buttom = styled.Text`
    padding: 5px;
    width: 150px;
    height: 40px;
    text-align: center;
    border-width: 1;
    border-color: white;
    border-radius: 5px;
    color: white;

`

const LivrosScreen = (props) => {

    return (
        <SearchPageTemplate >
            <Container>
                {list.map(item => <Buttom key={item.id} > {item.nome} </Buttom>)}
            </Container>
        </SearchPageTemplate>
    )

}

export default LivrosScreen;

