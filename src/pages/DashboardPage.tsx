import {useNavigate} from "react-router-dom";
import {useUser} from "@/hooks/useUser.ts";

export function DashboardPage() {
    const navigate = useNavigate();
    const {currentUser} = useUser();

    return (
        <div className="page">
            <div className="dashboard-hero">
                <h1>Dashboard</h1>
                <p>Vítej zpět{currentUser ? `, ${currentUser.name}` : ""}!</p>
            </div>

            <form className="dashboard-start">
                <div className="form-group">
                    <label>Název tréninku</label>
                    <input className="input" type="text" />
                </div>
                <div>
                    <button className="btn btn-primary btn-lg" onClick={() => navigate("/workout")}>
                        🏋️ Spustit nový workout
                    </button>
                </div>
            </form>
        </div>
    );
}
