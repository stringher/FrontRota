import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthorization } from '../contexts/AuthorizationContext';

import HomeScreen from '../pages/home/HomeScreen';
import PlayListScreen from '../pages/playList/PlayListScreen';
import CadastroScreen from '../pages/cadastro/CadastroScreen';
import LivrosScreen from '../pages/livros/LivrosScreen';
import CapitulosScreen from '../pages/capitulos/CapitulosScreen'
import PlayerScreen from '../pages/player/PlayerScreen'
import MidiaCapituloScreen from '../pages/midiacapitulo/MidiaCapituloScreen'
import FirstPage from '../pages/first-page/firstPage';


const AutenticatedRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown: false, animation: 'slide_from_right', }}>
            <Stack.Screen name="Login" component={HomeScreen} />
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="PlayList" component={PlayListScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Livros" component={LivrosScreen} />
            <Stack.Screen name="Capitulos" component={CapitulosScreen} />
            <Stack.Screen name="Player" component={PlayerScreen} />
            <Stack.Screen name="MidiaCapitulo" component={MidiaCapituloScreen} />
        </Stack.Navigator>
    );
}

const UnAuthenticatedRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'slide_from_right', }} >
            <Stack.Screen name="Login" component={HomeScreen} />
            {/* <Stack.Screen name="PlayList" component={PlayListScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Livros" component={LivrosScreen} />
            <Stack.Screen name="Capitulos" component={CapitulosScreen} /> */}
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