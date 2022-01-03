import React from "react";
import AppLoading from 'expo-app-loading';
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';
import { Ionicons, MaterialIcons, Entypo, } from '@expo/vector-icons'

const height = Dimensions.get('window').height;

const Container = styled.View`
    align-self: center;
    flex-direction: row;    
    justify-content: space-between;
    position: absolute;
    top: ${height - 50}px; 
`

const ButtonContainer = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 60px;
    border-radius: 10px;
    padding: 2px;
`

const Button = styled.TouchableHighlight`
    
`

const ButtonText = styled.Text`
    font-family: RobotoCondensed_300Light;
    font-size: 11px;
    color: ${(props) => props.active === props.id ? "#FBB03F" : "#BBBBBB"};
`

const MenuButton = (props) => {

    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Button
                activeOpacity={0.6}
                underlayColor="rgba(45, 69, 93, 0.6)"
                onPress={() => props?.onPress(props.id)}
            >
                <ButtonContainer>
                    {props.icon({ color: props.active === props.id ? "#FBB03F" : "#BBBBBB" })}
                    <ButtonText {...props}>{props.text}</ButtonText>
                </ButtonContainer>
            </Button >
        )
    }
}

const Footer = (props) => {

    const [active, setActive] = React.useState(props.id || 0);

    const homeIcon = (props) => <Ionicons name="home-sharp" size={24} color={props.color} />
    const playListIcon = (props) => <MaterialIcons name="playlist-add" size={24} color={props.color} />
    const shareIcon = (props) => <Entypo name="share" size={24} color={props.color} />
    const settingsIcon = (props) => <Ionicons name="settings-outline" size={24} color={props.color} />

    const handleOnPress = (id) => {
        if (id !== props.id) {
            setActive(id);
            switch (id) {
                case 1:
                    props.navigation.navigate('Home')
                    break;
                case 2:
                    props.navigation.navigate('PlayList')
                    break;
            }
        }

    }

    return (
        <Container>
            <MenuButton id={1} active={active} icon={homeIcon} onPress={() => handleOnPress(1)} text="Home" />
            <MenuButton id={2} active={active} icon={playListIcon} onPress={() => handleOnPress(2)} text="Playlist" />
            <MenuButton id={3} active={active} icon={shareIcon} onPress={() => handleOnPress(3)} text="Compartilhar" />
            <MenuButton id={4} active={active} icon={settingsIcon} onPress={() => handleOnPress(4)} text="Configurações" />
        </Container>
    )
}


export default Footer;
