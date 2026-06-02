import type {ExerciseSet} from "@/types/Set.ts";

type WorkoutSetProps = {
    set: ExerciseSet;
    onRemoveSet: () => void;
    onToggleCompleted: () => void;
}

export function WorkoutSet({set, onRemoveSet, onToggleCompleted}: WorkoutSetProps) {
    return (
        <>
            <div>WorkoutSet</div>
            <form>
                <input type="number" placeholder="0"/>
                <input type="number" placeholder="0" />
                <input type="checkbox" onClick={() => onToggleCompleted()}/>
            </form>
        </>
    )
}