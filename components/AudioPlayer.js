import React from 'react'
import { ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';

const Container = styled.View`
    flex: 1;  
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
`;

const ButtonContainer = styled.View`
    flex: 1;  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 150px;
`;

const Button = styled.TouchableHighlight`
    border-radius: 8px;
`
const TimeLabel = styled.Text`
    padding-top: 25px;
    color: #BBBBBB;
    font-size: 12px;
    font-family: RobotoCondensed_300Light;
`
const LoadingContainer = styled.View`
    flex: 1; 
    top: 10px; 
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
`;
// const Progress = (data) => {

//     return (
//         <></>
//         // <ProgressBar progress={0.5} color={Colors.red800} />
//         // <ProgressBar
//         //     styleAttr="Horizontal"
//         //     color="#2196F3"
//         //     indeterminate={false}
//         //     progress={0.5}
//         // />
//     )
// }


const msToTime = (duration) => {
    // let milliseconds = Math.floor((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // return (
    //     ((hours === "00") ? "" : hours + ":h") +
    //     ((minutes === "00" && hours === "00") ? "" : minutes + ":") +
    //     ((seconds === '00' && minutes === "00" && hours === "00") ? "" : seconds)
    // )
    return (
        ((hours === "00") ? "" : hours + ":h") + minutes + ":" + seconds
    )
    // return hours + ":" + minutes + ":" + seconds;
}

const AudioPlayer = (props) => {
    const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

    const [sound, setSound] = React.useState();
    const [status, setStatus] = React.useState('Stopped');
    const [loading, setLoading] = React.useState(false);
    const [duration, setDuration] = React.useState(0);
    const [position, setPosition] = React.useState(0);

    React.useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);

    const playSound = async () => {
        if (props.url && status !== 'Error') {
            if (sound) {
                if (status === 'Playing') {
                    sound.pauseAsync();
                    setStatus('Paused');
                } else if (status === 'Paused') {
                    sound.setStatusAsync({ shouldPlay: true });
                }
            } else {
                try {
                    setStatus('Loading')
                    const { sound } = await Audio.Sound.createAsync({ uri: props.url }, { shouldPlay: true });
                    setSound(sound);
                    await sound.playAsync();
                    sound.setOnPlaybackStatusUpdate(async (s) => {
                        setDuration(s.durationMillis);
                        setPosition(s.positionMillis);
                        if (s.loading !== loading) setLoading(s.loading)
                        if (s.isPlaying && status !== 'Playing') setStatus('Playing');
                        // didJustFinish: false
                        // durationMillis: 1533178.776
                        // isBuffering: false
                        // isLoaded: true
                        // isLooping: false
                        // isMuted: false
                        // isPlaying: true
                        // positionMillis: 24617.835
                        // progressUpdateIntervalMillis: 100
                        // rate: 1
                        // shouldCorrectPitch: false
                        // shouldPlay: false
                        // uri: "https://traffic.omny.fm/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/19cc81e9-b5ee-4bfa-b607-ab95010bd308/fe9315e4-684c-4e8a-8b57-aba30117a422/audio.mp3"
                        // volume: 1
                    })
                } catch { setStatus('Error') }

            }
        }
    }

    const forward = (value = 30) => {
        if (sound) {
            if (position + (value * 1000) < duration) {
                sound.setStatusAsync({ positionMillis: position + (value * 1000), shouldPlay: true });
            }
        }
    }

    const backward = (value = 10) => {
        if (sound) {
            if (position > (value * 1000)) {
                sound.setStatusAsync({ positionMillis: position - (value * 1000), shouldPlay: true });
            } else if (position <= (value * 1000)) {
                sound.setStatusAsync({ positionMillis: 1, shouldPlay: true });
            }
        }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                {/* <Progress data={0.50} /> */}
                <ButtonContainer>
                    {position > 0 && <TimeLabel>{msToTime(position || 0)}</TimeLabel>}
                    {duration > 0 && <TimeLabel>-{msToTime(duration - position || 0)}</TimeLabel>}
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        disabled={!(status === 'Playing' || status === 'Paused')}
                        underlayColor="#DDDDDD"
                        onPress={() => backward(10)}
                    >
                        <MaterialIcons name="replay-10" size={30} color={(status === 'Playing' || status === 'Paused') ? 'white' : 'gray'} />
                    </Button>
                    <Button
                        disabled={!(status === 'Playing' || status === 'Paused' || status === 'Stopped')}
                        underlayColor="#DDDDDD"
                        onPress={playSound}
                    >
                        {
                            status === 'Playing' ?
                                <MaterialIcons name="pause-circle-outline" size={50} color={(status === 'Playing' || status === 'Paused' || status === 'Stopped') ? 'white' : 'gray'} />
                                :
                                <MaterialIcons name="play-circle-outline" size={50} color={(status === 'Playing' || status === 'Paused' || status === 'Stopped') ? 'white' : 'gray'} />
                        }
                    </Button>
                    <Button
                        disabled={status === 'Error' || status === 'Loading'}
                        underlayColor="#DDDDDD"
                        onPress={() => forward(30)}
                    >
                        <MaterialIcons name="forward-30" size={30} color={(status === 'Playing' || status === 'Paused') ? 'white' : 'gray'} />
                    </Button>

                </ButtonContainer>
                <LoadingContainer>
                    {(!(status === 'Playing' || status === 'Paused' || status === 'Stopped') || loading) &&
                        <>
                            <ActivityIndicator />
                            <TimeLabel>Carregando ...</TimeLabel>
                        </>
                    }
                </LoadingContainer>
            </Container>
        )
    }
}

export default AudioPlayer;