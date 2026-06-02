import type {ExerciseSet} from "@/types/Set.ts";
import {useState} from "react";

type WorkoutSetProps = {
    set: ExerciseSet;
    index: number;
    onToggleCompleted: (weight: number, reps: number, completed: boolean) => void;
}

export function WorkoutSet({set, index, onToggleCompleted}: WorkoutSetProps) {
    const [weight, setWeight] = useState(set.weight);
    const [reps, setReps] = useState(set.reps);

    return (
        <form
            className="set-row"
            onSubmit={(e) => {
                e.preventDefault();
                onToggleCompleted(weight, reps, true);
            }}
        >
            <span className="set-row-num">#{index}</span>

            <span className="set-row-field">
                <input
                    className="input input-sm"
                    type="number"
                    required
                    placeholder="0"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                />
                kg
            </span>

            <span className="set-row-field">
                <input
                    className="input input-sm"
                    type="number"
                    required
                    placeholder="0"
                    value={reps}
                    onChange={(e) => setReps(Number(e.target.value))}
                />
                rep
            </span>

            <span className="set-row-spacer" />

            <button className="btn btn-primary btn-sm" type="submit">
                Uložit
            </button>
        </form>
    );
}
