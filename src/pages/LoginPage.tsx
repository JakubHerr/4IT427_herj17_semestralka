import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUser} from "@/hooks/useUser.ts";

export function LoginPage() {
    const {login} = useUser();
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
        const ok = login(username, password);
        if (!ok) {
            setError("Invalid username or password.");
            return;
        }
        navigate("/dashboard");
    }

    return (
        <>
            <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
            <p>No account? <a onClick={() => navigate("/register")} style={{cursor: "pointer"}}>Register</a></p>
        </>
    );
}
