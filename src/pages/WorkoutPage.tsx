import {ExerciseCard} from "@/components/ExerciseCard.tsx";
import {useWorkout} from "@/hooks/useWorkout.ts";
import {useNavigate} from "react-router-dom";

export function WorkoutPage() {
    const { workout, saveWorkout, resetWorkout } = useWorkout();
    const navigate = useNavigate();

    return (
        <>
            <h1>Workout</h1>
            <div>
                <button onClick={() => navigate("/workout/select-exercise")}>Přidat cvik</button>
            </div>

            <div>
                {workout?.exercises.map((exercise) => (
                    <div key={exercise.id}>
                        <ExerciseCard
                            exercise={exercise}
                        />
                        <p/>
                    </div>
                ))}
            </div>

            <div>
                <button onClick={() => saveWorkout()}>Save workout</button>
                <button onClick={() => resetWorkout()}>cancel workout</button>
            </div>
        </>
    )
}