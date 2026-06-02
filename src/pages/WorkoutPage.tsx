import {useState} from "react";
import type {Workout} from "@/types/Workout.ts";
import {ExerciseCard} from "@/components/ExerciseCard.tsx";

export function WorkoutPage() {
    const [workout, setWorkout] = useState<Workout>({
        id: "-1",
        userId: "Pepa",
        date: new Date(),
        exercises: [{
            id: "1",
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
                            id: "2",
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