import React from 'react';
import { useEffect } from 'react';

const Context = React.createContext({
    user: undefined,
    isAutenticated: () => false,
    loading: false,
    login: (username, password) => Promise.resolve(undefined),
    logout: () => console.warn('no provider')
});

const AuthorizationProvider = ({ children }) => {

    const [user, setUser] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (!user && !loading) { }
    }, []);

    const logout = () => setUser(undefined);
    const login = (username, password) => { };
    const isAutenticated = () => !user ? false : true;

    return (
        <Context.Provider value={{ user, isAutenticated, loading, login, logout }}>
            {children}
        </Context.Provider>
    );

}

export { AuthorizationProvider };
export const useAuthorization = () => React.useContext(Context);
