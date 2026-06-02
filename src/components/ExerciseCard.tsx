import type {Exercise} from "@/types/Exercise.ts";
import {useState} from "react";
import type {ExerciseSet} from "@/types/Set.ts";
import {WorkoutSet} from "@/components/WorkoutSet.tsx";

type ExerciseCardProps = {
    exercise: Exercise;
    onRemoveExercise: () => void;
}

export function ExerciseCard({exercise, onRemoveExercise}: ExerciseCardProps) {
    const [sets, setSets] = useState<ExerciseSet[]>([
        {reps: 0, weight: 0, completed: false},
    ]);

    return (
        <>
            <div>ExerciseCard</div>
            <div>{exercise.name}</div>
            <button onClick={() => setSets(
                [...sets, {reps: 0, weight: 0, completed: false}]
            )}>Add set
            </button>

            <button onClick={() => setSets(
                sets.slice(0, sets.length - 1)
            )}>Remove set
            </button>

            <button onClick={onRemoveExercise}>Remove exercise</button>

            {sets.map((set) => (
                <WorkoutSet
                    set = {set}
                    onRemoveSet = {() => setSets(
                        sets.filter((s) => s !== set)
                    )}
                    onToggleCompleted = {() => setSets(
                        sets.map((s) => s.reps === set.reps && s.weight === set.weight ? {...s, completed: !s.completed} : s)
                    )}
                />
            ))}
        </>
    )
}