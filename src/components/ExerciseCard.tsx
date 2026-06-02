import type {Exercise} from "@/types/Exercise.ts";
import {WorkoutSet} from "@/components/WorkoutSet.tsx";
import {useWorkout} from "@/hooks/useWorkout.ts";

type ExerciseCardProps = {
    exercise: Exercise;
}

export function ExerciseCard({exercise}: ExerciseCardProps) {
    const { removeExercise, addSet, removeSet, modifySet} = useWorkout();

    return (
        <>
            <div>ExerciseCard</div>
            <div>{exercise.name}</div>
            <button onClick={() => addSet(exercise.id)}>Add set
            </button>

            <button
                onClick={() => exercise.sets.length > 0 && removeSet(exercise.id, exercise.sets[exercise.sets.length-1].id)}
                disabled={exercise.sets.length === 0}
            >Remove set
            </button>

            <button onClick={() => removeExercise(exercise.id)}>Remove exercise</button>

            {exercise.sets.map((set) => (
                <WorkoutSet
                    key={set.id}
                    set={set}
                    onToggleCompleted={(weight, reps, completed) => modifySet(exercise.id, set.id, {weight, reps, completed})} />
            ))}
        </>
    )
}