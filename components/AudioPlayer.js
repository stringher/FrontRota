import React from 'react'
import { Audio } from 'expo-av';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading';
import { Dimensions } from "react-native";

const Container = styled.View`
    flex: 1;  
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    background-color: #132440;
    border-width: 1px;
    border-color: white;
    height: 300px;
`;

const ButtonContainer = styled.View`
    flex: 1;  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    background-color: #132440;
    border-width: 1px;
    border-color: white;
`;

const Button = styled.TouchableHighlight`
    border-radius: 8px;
    /* border-width: 1;
    border-color: white; */
    
`


const Progress = (data) => {

    return (
        <></>
        // <ProgressBar progress={0.5} color={Colors.red800} />
        // <ProgressBar
        //     styleAttr="Horizontal"
        //     color="#2196F3"
        //     indeterminate={false}
        //     progress={0.5}
        // />
    )
}

const AudioPlayer = (props) => {
    const [status, setStatus] = React.useState('Stopped');
    const [sound, setSound] = React.useState();

    React.useEffect(() => {
        switch (status) {
            case 'Stopped':
                break;
            case 'Playing':
                break;
            case 'Paused':
                break;

            default:
                break;
        }
    }, [status]);

    React.useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);


    const playSound = async () => {
        if (props.url) {
            const { sound } = await Audio.Sound.createAsync(props.url);
            setSound(sound);
            await sound.playAsync().then(x => {
                console.log('Playing');
                setStatus('Playing')
            });
        }
    }

    return (
        <Container>
            <Progress data={0.50} />
            <ButtonContainer>
                <Button >
                    <MaterialIcons name="replay-10" size={30} color='white' />
                </Button>
                <Button onPress={playSound}>
                    <MaterialIcons name="play-circle-outline" size={50} color='white' />
                </Button>
                <Button>
                    <MaterialIcons name="forward-30" size={30} color='white' />
                </Button>
            </ButtonContainer>
        </Container>
    )
}


export default AudioPlayer;