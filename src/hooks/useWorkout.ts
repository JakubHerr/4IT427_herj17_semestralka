import {useContext} from "react";
import {WorkoutContext} from "@/context/WorkoutContext.tsx";

export function useWorkout() {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error("useWorkout must be used within a WorkoutProvider");
    }
    return context;
}