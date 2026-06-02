import type {User} from "@/types/User.ts";

export function findUser(users: User[], username: string, password: string): User | undefined {
    return users.find(u => u.name === username && u.password === password);
}
