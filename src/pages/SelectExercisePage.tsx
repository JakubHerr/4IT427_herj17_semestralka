import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import type {Exercise} from "@/types/Exercise.ts";
import {useWorkout} from "@/hooks/useWorkout.ts";

export function SelectExercisePage() {
    const navigate = useNavigate();
    const {addExercise} = useWorkout();

    const {data: exercises, isLoading, isError, error} = useQuery({
        queryKey: ['exercises'],
        queryFn: async () => fetch("/exercises.json").then(res => res.json() as Promise<Exercise[]>),
        staleTime: 60_000,
    });

    function handleSelect(exercise: Exercise) {
        addExercise({...exercise, id: crypto.randomUUID()});
        navigate("/workout");
    }

    if (isLoading) return <p>Loading exercises...</p>;
    if (isError) return <p>Error: {(error as Error).message}</p>;

    return (
        <>
            <h1>Select Exercise</h1>
            {exercises!.map(ex => (
                <div key={ex.id}>
                    <button onClick={() => handleSelect(ex)}>{ex.name}</button>
                    <span> — {ex.description}</span>
                </div>
            ))}
        </>
    );
}
