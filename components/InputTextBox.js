import styled from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';

const Container = styled.View`
  border: 1px;  
  border-radius: 8px;
  border-color: #BBBBBB;
  padding: 10px;
  margin-bottom: 16px;
`

// const StyledText = styled.Text`
// `

const Input = styled.TextInput`
  color: #FBB03F;
  height: 40px;
  font-size: 18px;
  font-family: RobotoCondensed_300Light;
  padding-left: 8px;
  padding-right: 8px;
`

const InputTextBox = ({ ...inputProps }) => {
  const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        {/* <StyledText >{label}</StyledText> */}
        <Input {...inputProps} />
      </Container>
    )
  }
}

export default InputTextBox;