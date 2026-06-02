import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUser} from "@/hooks/useUser.ts";

export function RegisterPage() {
    const {register} = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        if (!username || !password) {
            setError("Username and password are required.");
            return;
        }
        const ok = register(username, password);
        if (!ok) {
            setError("Username already taken.");
            return;
        }
        navigate("/dashboard");
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a onClick={() => navigate("/login")} style={{cursor: "pointer"}}>Login</a></p>
        </>
    );
}
