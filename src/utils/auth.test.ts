import {describe, it, expect} from "vitest";
import {findUser} from "./auth";
import type {User} from "@/types/User";

const users: User[] = [
    {id: "1", name: "alice", email: "alice@example.com", password: "password123"},
    {id: "2", name: "bob",   email: "bob@example.com",   password: "secret"},
];

describe("findUser", () => {
    it("returns the matching user when credentials are correct", () => {
        const result = findUser(users, "alice", "password123");
        expect(result).toBeDefined();
        expect(result?.id).toBe("1");
    });

    it("returns undefined when password is wrong", () => {
        expect(findUser(users, "alice", "wrongpass")).toBeUndefined();
    });

    it("returns undefined when username does not exist", () => {
        expect(findUser(users, "charlie", "password123")).toBeUndefined();
    });

    it("is case-sensitive for username", () => {
        expect(findUser(users, "Alice", "password123")).toBeUndefined();
    });

    it("returns undefined when user list is empty", () => {
        expect(findUser([], "alice", "password123")).toBeUndefined();
    });
});
