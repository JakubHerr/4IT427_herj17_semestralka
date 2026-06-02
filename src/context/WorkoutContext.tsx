import type {Workout} from "@/types/Workout.ts";
import type {Exercise} from "@/types/Exercise.ts";
import {createContext, useContext, useState} from "react";
import type {ExerciseSet} from "@/types/Set.ts";
import {UserContext} from "@/context/UserContext.tsx";

interface WorkoutContextProps {
    workout: Workout;
    addExercise: (exercise: Exercise) => void;
    removeExercise: (exerciseId: string) => void;

    addSet: (exerciseId: string) => void;
    removeSet: (exerciseId: string, setId: string) => void;
    modifySet: (
        exerciseId: string,
        setId: string,
        patch: Partial<ExerciseSet>
    ) => void;

    saveWorkout: () => void;
    resetWorkout: () => void;
}

export const WorkoutContext = createContext<WorkoutContextProps | null>(null);

export function WorkoutProvider({children}: {children: React.ReactNode}) {
    const {currentUser} = useContext(UserContext);

    const [workout, setWorkout] = useState<Workout>({
        id: crypto.randomUUID(),
        userId: currentUser?.id ?? "Pepa",
        date: new Date(),
        exercises: [],
        duration: 0,
    });

    function addExercise(exercise: Exercise) {
        setWorkout(prev => ({
            ...prev,
            exercises: [...prev.exercises, exercise],
        }));
    }

    function removeExercise(exerciseId: string) {
        setWorkout(prev => ({
            ...prev,
            exercises: prev.exercises.filter(e => e.id !== exerciseId),
        }));
    }

    function addSet(exerciseId: string) {
        setWorkout(prev => ({
            ...prev,
            exercises: prev.exercises.map(ex =>
                ex.id === exerciseId
                    ? {
                        ...ex,
                        sets: [
                            ...ex.sets,
                            {
                                id: crypto.randomUUID(),
                                reps: 0,
                                weight: 0,
                                completed: false,
                            },
                        ],
                    }
                    : ex
            ),
        }));
    }

    function removeSet(exerciseId: string, setId: string) {
        setWorkout(prev => ({
            ...prev,
            exercises: prev.exercises.map(ex =>
                ex.id === exerciseId
                    ? {
                        ...ex,
                        sets: ex.sets.filter(s => s.id !== setId),
                    }
                    : ex
            ),
        }));
    }

    function modifySet(
        exerciseId: string,
        setId: string,
        patch: Partial<ExerciseSet>
    ) {
        setWorkout(prev => ({
            ...prev,
            exercises: prev.exercises.map(ex =>
                ex.id === exerciseId
                    ? {
                        ...ex,
                        sets: ex.sets.map(s =>
                            s.id === setId ? { ...s, ...patch } : s
                        ),
                    }
                    : ex
            ),
        }));
    }

    function saveWorkout() {
        console.log("Saving workout:", workout); // TODO save it somewhere
    }

    function resetWorkout() {
        setWorkout({
            id: crypto.randomUUID(),
            userId: "Pepa",
            date: new Date(),
            exercises: [],
            duration: 0,
        });
    }

    return (
        <WorkoutContext.Provider value={{workout, addExercise, removeExercise, addSet, removeSet, modifySet, saveWorkout, resetWorkout}}>
            {children}
        </WorkoutContext.Provider>
    )
}