import {ExerciseCard} from "@/components/ExerciseCard.tsx";
import {useWorkout} from "@/hooks/useWorkout.ts";

export function WorkoutPage() {
    const { workout, addExercise, saveWorkout, resetWorkout } = useWorkout();

    return (
        <>
            <h1>Workout</h1>
            <div>
                <button onClick={() => addExercise({
                        id: crypto.randomUUID(),
                        name: "test2",
                        description: "test2",
                        sets: []
                    }
                )}>Přidat cvik
                </button>
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