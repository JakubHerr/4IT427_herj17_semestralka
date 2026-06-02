import type {Exercise} from "@/types/Exercise.ts";
import {WorkoutSet} from "@/components/WorkoutSet.tsx";
import {useWorkout} from "@/hooks/useWorkout.ts";

type ExerciseCardProps = {
    exercise: Exercise;
}

export function ExerciseCard({exercise}: ExerciseCardProps) {
    const {removeExercise, addSet, removeSet, modifySet} = useWorkout();

    return (
        <div className="exercise-card">
            <div className="exercise-card-header">
                <div>
                    <div className="exercise-card-title">{exercise.name}</div>
                    <div className="exercise-card-body-part">{exercise.bodyPart}</div>
                </div>
                <div className="exercise-card-actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => removeExercise(exercise.id)}>
                        Odebrat
                    </button>
                </div>
            </div>

            <div className="exercise-sets">
                {exercise.sets.map((set, index) => (
                    <WorkoutSet
                        key={set.id}
                        set={set}
                        index={index + 1}
                        onToggleCompleted={(weight, reps, completed) =>
                            modifySet(exercise.id, set.id, {weight, reps, completed})
                        }
                    />
                ))}
            </div>

            <div className="exercise-sets-footer">
                <button className="btn btn-secondary btn-sm" onClick={() => addSet(exercise.id)}>
                    + Přidat sérii
                </button>
                <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => exercise.sets.length > 0 && removeSet(exercise.id, exercise.sets[exercise.sets.length - 1].id)}
                    disabled={exercise.sets.length === 0}
                >
                    − Odebrat sérii
                </button>
            </div>
        </div>
    );
}
