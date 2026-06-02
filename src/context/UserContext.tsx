import {createContext, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import type {User} from "@/types/User.ts";

interface UserContextProps {
    currentUser: User | null;
    login: (username: string, password: string) => boolean;
    register: (username: string, password: string) => boolean;
    logout: () => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({children}: {children: React.ReactNode}) {
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const {data: initialUsers} = useQuery({
        queryKey: ['users'],
        queryFn: async () => fetch("/users.json").then(res => res.json() as Promise<User[]>),
        staleTime: Infinity,
    });

    useEffect(() => {
        if (initialUsers) setUsers(initialUsers);
    }, [initialUsers]);

    function login(username: string, password: string): boolean {
        const user = users.find(u => u.name === username && u.password === password);
        if (!user) return false;
        setCurrentUser(user);
        return true;
    }

    function register(username: string, password: string): boolean {
        if (users.some(u => u.name === username)) return false;
        const newUser: User = {
            id: crypto.randomUUID(),
            name: username,
            email: "",
            password,
        };
        setUsers(prev => [...prev, newUser]);
        setCurrentUser(newUser);
        return true;
    }

    function logout() {
        setCurrentUser(null);
    }

    return (
        <UserContext.Provider value={{currentUser, login, register, logout}}>
            {children}
        </UserContext.Provider>
    );
}
