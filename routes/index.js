import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthorization } from '../contexts/AuthorizationContext';

import HomeScreen from '../pages/home/HomeScreen';
import PlayListScreen from '../pages/playList/PlayListScreen';
import CadastroScreen from '../pages/cadastro/CadastroScreen';
import LivrosScreen from '../pages/livros/LivrosScreen';
import CapitulosScreen from '../pages/capitulos/CapitulosScreen'

const AutenticatedRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Livros" screenOptions={{ headerShown: false, animation: 'slide_from_right', }}>
            <Stack.Screen name="Login" component={HomeScreen} />
            <Stack.Screen name="PlayList" component={PlayListScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Livros" component={LivrosScreen} />
            <Stack.Screen name="Capitulos" component={CapitulosScreen} />
        </Stack.Navigator>
    );
}

const UnAuthenticatedRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Livros" screenOptions={{ headerShown: false, animation: 'slide_from_right', }} >
            <Stack.Screen name="Login" component={HomeScreen} />
            <Stack.Screen name="PlayList" component={PlayListScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Livros" component={LivrosScreen} />
            <Stack.Screen name="Capitulos" component={CapitulosScreen} />
        </Stack.Navigator>
    );
}


const Routes = () => {
    const { isAutenticated } = useAuthorization();
    return (
        <NavigationContainer>
            {!isAutenticated() ? <AutenticatedRoutes /> : <UnAuthenticatedRoutes />}
        </NavigationContainer>
    );
}

export default Routes;