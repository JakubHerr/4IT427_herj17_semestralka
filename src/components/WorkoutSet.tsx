import type {ExerciseSet} from "@/types/Set.ts";
import {useState} from "react";

type WorkoutSetProps = {
    set: ExerciseSet;
    onToggleCompleted: (weight: number, number: number, completed: boolean) => void;
}

export function WorkoutSet({set, onToggleCompleted}: WorkoutSetProps) {
    const { weight, setWeight } = useState(0)
    const { reps, setReps } = useState(0)

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                onToggleCompleted(weight, reps, true)
            }}
            >
                <input type="number" required placeholder="0" value={weight}
                       onChange={(e) => setWeight(e.target.value)}/>
                <input type="number" required placeholder="0" value={reps} onChange={(e) => setReps(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </>
    )
}