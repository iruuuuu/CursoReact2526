export type theme = 'light' | 'dark' | 'system';

export interface User {
    id:string;
    name:string;
    email:string;
    avatar:string;
    role: 'admin' | 'user';
}

export interface AppContextType {
    user: User | null;
    theme: theme;
    setUser: (user: User | null) => void;
    setTheme: (theme: theme) => void;
}