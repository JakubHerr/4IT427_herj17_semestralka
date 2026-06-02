import type {ExerciseSet} from "@/types/Set.ts";
import {useState} from "react";

type WorkoutSetProps = {
    set: ExerciseSet;
    onToggleCompleted: (weight: number, reps: number, completed: boolean) => void;
}

export function WorkoutSet({set, onToggleCompleted}: WorkoutSetProps) {
    const [weight, setWeight] = useState(set.weight)
    const [reps, setReps] = useState(set.reps)

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                onToggleCompleted(weight, reps, true)
            }}
            >
                <input type="number" required placeholder="0" value={weight}
                       onChange={(e) => setWeight(Number(e.target.value))}/>
                <input type="number" required placeholder="0" value={reps} onChange={(e) => setReps(Number(e.target.value))}/>
                <button type="submit">Save</button>
            </form>
        </>
    )
}