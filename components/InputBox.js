import React from 'react';
import styled from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { MaskedTextInput } from "react-native-mask-text";

import { useFonts, RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed';

const Container = styled.View`
  border: 1px;  
  border-radius: 8px;
  border-color: #BBBBBB;
  padding: 10px;
  margin-bottom: 16px;
`

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  font-family: RobotoCondensed_300Light;
  padding-left: 8px;
  padding-right: 8px;
`

const Input = styled.TextInput`
  color: #FBB03F;
  height: 30px;
  font-size: 18px;
  font-family: RobotoCondensed_300Light;
  padding-left: 8px;
  padding-right: 8px;
`

const InputDate = styled(MaskedTextInput)`
  color: #FBB03F;
  height: 30px;
  font-size: 18px;
  font-family: RobotoCondensed_300Light;
  padding-left: 8px;
  padding-right: 8px;
`

export const InputTextBox = ({ name, onChange, errors, ...inputProps }) => {
  const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });
  const [text, setText] = React.useState('');

  const handleOnChange = (data) => {
    setText(data)
    let res = {}
    res[name] = data
    onChange(res)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        {/* <StyledText >{label}</StyledText> */}
        <Input
          {...inputProps}
          onChangeText={text => handleOnChange(text)}
          defaultValue={text}
        />
        {errors && errors.filter(error => error.key === name).map((err, index) => <ErrorText key={index}>* {err.message}</ErrorText>)}
      </Container>
    )
  }
}

export const InputDateBox = ({ name, onChange, errors, ...inputProps }) => {
  const [fontsLoaded] = useFonts({ RobotoCondensed_300Light, });
  const [text, setText] = React.useState('');

  const handleOnChange = (data) => {
    setText(data)
    let res = {}
    res[name] = data
    onChange(res)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <InputDate
          {...inputProps}
          mask="99/99/9999"
          onChangeText={text => handleOnChange(text)}
          defaultValue={text}
        />
        {errors && errors.filter(error => error.key === name).map((err, index) => <ErrorText key={index}>* {err.message}</ErrorText>)}
      </Container>
    )
  }
}
