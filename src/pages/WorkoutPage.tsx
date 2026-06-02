import {ExerciseCard} from "@/components/ExerciseCard.tsx";
import {useWorkout} from "@/hooks/useWorkout.ts";
import {useNavigate} from "react-router-dom";

export function WorkoutPage() {
    const {workout, saveWorkout, resetWorkout} = useWorkout();
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="page-header">
                <h1>Workout</h1>
                <button className="btn btn-secondary" onClick={() => navigate("/workout/select-exercise")}>
                    + Přidat cvik
                </button>
            </div>

            <div className="workout-exercises">
                {workout?.exercises.map((exercise) => (
                    <div key={exercise.id} className="card">
                        <ExerciseCard exercise={exercise} />
                    </div>
                ))}
                {workout?.exercises.length === 0 && (
                    <p style={{color: "var(--color-text-muted)", fontSize: "14px"}}>
                        Žádné cviky. Přidej první cvik.
                    </p>
                )}
            </div>

            <div className="workout-footer">
                <button className="btn btn-primary" onClick={() => saveWorkout()}>
                    Uložit workout
                </button>
                <button className="btn btn-danger" onClick={() => resetWorkout()}>
                    Zrušit workout
                </button>
            </div>
        </div>
    );
}
