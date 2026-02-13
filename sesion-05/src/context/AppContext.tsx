import { createContext, useState, type ReactNode } from "react";

export interface User {
    id: string;
    nombre: string;
    avatar: string;
    role: string;
}

interface AppState {
    user: User | null;
    theme: string;
    language: string;
}

interface AppContextType extends AppState {
    setUser: (user: User | null) => void;
    setTheme: (theme: string) => void;
    setLanguage: (lang: string) => void;
}

export const AppcContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [state, setState] = useState<AppState>({
        user: {
            id: "1",
            nombre: "Irene",
            avatar: "https://i.pinimg.com/736x/d8/5d/99/d85d99c81c0f952391a49085ec898e47.jpg",
            role: "admin"
        },
        theme: "dark",
        language: "es"
    });

    const setUser = (user: User | null) => {
        setState(prev => ({ ...prev, user }));
    };

    const setTheme = (theme: string) => {
        setState(prev => ({ ...prev, theme }));
    };

    const setLanguage = (language: string) => {
        setState(prev => ({ ...prev, language }));
    };

    const value = {
        ...state,
        setUser,
        setTheme,
        setLanguage
    };

    return <AppcContext.Provider value={value}>{children}</AppcContext.Provider>;
};