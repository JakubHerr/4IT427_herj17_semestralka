import {NavLink, useNavigate} from "react-router-dom";
import {useUser} from "@/hooks/useUser.ts";
import {ThemeToggle} from "@/components/ThemeToggle.tsx";

export function Navbar() {
    const {currentUser, logout} = useUser();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <nav className="navbar">
            <NavLink to="/dashboard" className="navbar-brand">
                💪 WorkoutApp
            </NavLink>

            {currentUser && (
                <>
                    <NavLink
                        to="/dashboard"
                        className={({isActive}) => "navbar-link" + (isActive ? " active" : "")}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/workout"
                        end
                        className={({isActive}) => "navbar-link" + (isActive ? " active" : "")}
                    >
                        Workout
                    </NavLink>
                </>
            )}

            <div className="navbar-spacer" />

            {currentUser && (
                <>
                    <span className="navbar-user">👤 {currentUser.name}</span>
                    <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
                        Odhlásit
                    </button>
                </>
            )}

            <ThemeToggle />
        </nav>
    );
}
