import styled from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';

const Container = styled.View`
  border: 1px;
  border-radius: 8px;
  border-color: #BBBBBB;
`

// const Text = styled.Text`
// `

const Input = styled.TextInput`
  color: #FBB03F;
  font-size: 18px;
  font-family: RobotoCondensed_300Light;
`

const InputText = ({ label, ...inputProps }) => {
  const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        {/* <Text >{label}</Text> */}
        <Input {...inputProps} />
      </Container>
    )
  }
}

export default InputText;