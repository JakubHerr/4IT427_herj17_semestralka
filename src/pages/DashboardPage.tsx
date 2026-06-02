import { useNavigate } from "react-router-dom";

export function DashboardPage() {
    const navigate = useNavigate();

    return (
        <form>
            <h1>Dashboard</h1>
            <div>
                <input type="text" />
            </div>

            <button onClick={() => navigate("/workout")}>
                Spustit nový workout
            </button>
        </form>
    )
}