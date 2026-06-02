import {useState} from "react";
import type {Workout} from "@/types/Workout.ts";
import {ExerciseCard} from "@/components/ExerciseCard.tsx";

export function WorkoutPage() {
    const [workout, setWorkout] = useState<Workout>({
        id: crypto.randomUUID(),
        userId: "Pepa",
        date: new Date(),
        exercises: [{
            id: crypto.randomUUID(),
            name: "test",
            description: "test",
        }],
        duration: 0,
    })

    return (
        <>
            <h1>Workout</h1>
            <div>
                <button onClick={() => setWorkout(
                    {
                        ...workout,
                        exercises: [...workout.exercises, {
                            id: crypto.randomUUID(),
                            name: "test2",
                            description: "test2",
                        }]
                    }
                )}>Přidat cvik</button>
            </div>

            <div>
                {workout?.exercises.map((exercise) => (
                    <>
                        <ExerciseCard
                            exercise = {exercise}
                            onRemoveExercise = {() => setWorkout(
                                {
                                    ...workout,
                                    exercises: workout.exercises.filter(
                                        (e) => e.id !== exercise.id
                                    )
                                }
                            )}
                        />
                        <p/>
                    </>
                ))}
            </div>
        </>
    )
}