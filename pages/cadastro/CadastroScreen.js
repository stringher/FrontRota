import React from "react";
import styled from "styled-components/native";
import * as Yup from 'yup'
import { Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, } from '@expo-google-fonts/roboto';

import { InputTextBox, InputDateBox } from '../../components/InputBox'
import TitlePageTemplate from "../../components/TitlePageTemplate";
import { format } from "date-fns";

const width = Dimensions.get('window').width;

const Container = styled.View`
    top: -50px;
    flex: 1;
    flex-direction: column;
    width: ${width - 50}px;
    padding: 0px;
    margin: 0px;
`

const Button = styled.TouchableOpacity`
    border-radius: 3px;
    padding-left: 8px;
    padding-right: 10px;
    background-color: #FBB03F;
    border-radius: 8px;
    height: 59px;
    align-items: center;
    justify-content: center;
`;

const StyledText1 = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 500;
    font-family: Roboto_400Regular;
`
const StyledText2 = styled.Text`
    margin-top: 30px;
    text-align: center;
    color: #B5B5B5;
    font-size: 16px;
    font-weight: 100;
    font-family: Roboto_400Regular;
`

const StyledImage = styled.Image`
    top: -80px;
    left: ${parseInt(width / 2) - 100}px;
    width: 150px;
    height: 150px;
`



function parseDateString(value, originalValue) {
    console.log('parseDateString', originalValue, new Date(originalValue));
    const parsedDate = format(originalValue, 'yyyy/MM/dd');
    console.log('parseDateStringreturn', parsedDate);
    return parsedDate;
}


const validationSchema = Yup.object().shape({
    nome: Yup
        .string()
        .required({ key: 'nome', message: 'O nome deve ser informado' }),
    dataNascimento: Yup
        .string()
        // .transform(parseDateString)
        //.transform((value, originalValue) => { parseDateString(originalValue) })
        // .message({ key: 'dataNascimento', message: 'A data de nascimento p   ode ser vazio' })
        .required({ key: 'dataNascimento', message: 'A data de nascimento deve ser informada' }),
    email: Yup
        .string()
        .required({ key: 'email', message: 'O email não pode ser vazio' })
        .email({ key: 'email', message: 'Digite um email válido' }),
    password: Yup
        .string()
        .required({ key: 'password', message: 'A senha é obrigatória' })
        .min(6, { key: 'password', message: 'A senha deve conter pelo menos 6 dígitos' })
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Senha precisa conter 6 Caracteres, um Maiúsculo, um Minúscuol, um Numero e um caractere especial (@$!%*#?&)"
        ),
    passwordConfirmation: Yup
        .string()
        .required({ key: 'passwordConfirmation', message: 'Confirme a senha' })
        .oneOf([Yup.ref('password'), null], { key: 'passwordConfirmation', message: 'Senha não confere' }),
})

const CadastroScreen = (props) => {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, })
    const [data, setData] = React.useState({})
    const [errors, setErrors] = React.useState([])
    // const errors = { nome: { message: 'teste' } }

    const validate = () => {
        try {
            validationSchema.validate(data, { abortEarly: false })
                .then((valid) => {
                    console.log('valid', valid);
                })
                .catch(function (err) {
                    setErrors(() => [...err.errors])
                });
        } catch (err) { console.log('error 2', err); }

    }

    const handleSetData = (value) => {
        setData(old => { return { ...old, ...value } })
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TitlePageTemplate {...props} nome="" footerId={0} >
                <StyledImage source={require('../../assets/logo1.png')} />
                <Container>
                    <InputTextBox name="nome" onChange={handleSetData} placeholder="Nome" errors={errors} />
                    <InputTextBox name="email" onChange={handleSetData} placeholder="Email" errors={errors} />
                    <InputDateBox
                        name="dataNascimento"
                        onChange={handleSetData}
                        placeholder="Data de Nascimento"
                        errors={errors}
                    // type={'datetime'}
                    // options={{ format: 'DD/MM/YYYY', }}
                    />
                    {/* 
                    <InputTextBox name="password" secureTextEntry onChange={handleSetData} placeholder="Senha" errors={errors} />
                    <InputTextBox name="passwordConfirmation" secureTextEntry onChange={handleSetData} placeholder="Confirmar Senha" errors={errors} /> 
                    */}
                    <InputTextBox name="password" onChange={handleSetData} placeholder="Senha" errors={errors} />
                    <InputTextBox name="passwordConfirmation" onChange={handleSetData} placeholder="Confirmar Senha" errors={errors} />
                    <Button onPress={() => validate()}>
                        <StyledText1>
                            Salvar
                        </StyledText1>
                    </Button>
                    <StyledText2>
                        Ou realizar login com
                    </StyledText2>
                </Container>
            </TitlePageTemplate>
        )
    }

}

export default CadastroScreen;

