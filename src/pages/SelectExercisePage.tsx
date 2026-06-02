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

    if (isLoading) return <div className="page"><p style={{color: "var(--color-text-muted)"}}>Načítání cviků...</p></div>;
    if (isError) return <div className="page"><p className="error-msg">Chyba: {(error as Error).message}</p></div>;

    return (
        <div className="page">
            <div className="page-header">
                <h1>Vybrat cvik</h1>
                <button className="btn btn-ghost" onClick={() => navigate("/workout")}>
                    ← Zpět
                </button>
            </div>

            <div className="exercise-list">
                {exercises!.map(ex => (
                    <button
                        key={ex.id}
                        className="exercise-list-item"
                        onClick={() => handleSelect(ex)}
                    >
                        <span className="exercise-list-item-name">{ex.name}</span>
                        <span className="exercise-list-item-desc">{ex.description}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
