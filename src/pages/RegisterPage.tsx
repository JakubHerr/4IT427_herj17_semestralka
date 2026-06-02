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
        <div className="auth-wrapper">
            <div className="auth-card">
                <h1>Registrace</h1>
                <form onSubmit={handleSubmit} className="form-stack">
                    <div className="form-group">
                        <label>Uživatelské jméno</label>
                        <input
                            className="input"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Heslo</label>
                        <input
                            className="input"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-msg">{error}</p>}
                    <button className="btn btn-primary btn-lg" type="submit">
                        Vytvořit účet
                    </button>
                </form>
                <p className="auth-footer">
                    Již máte účet?{" "}
                    <a onClick={() => navigate("/login")}>Přihlásit se</a>
                </p>
            </div>
        </div>
    );
}
