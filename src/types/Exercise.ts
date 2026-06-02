import type {ExerciseSet} from "@/types/Set.ts";

export interface Exercise {
    id: string;
    name: string;
    description: string;
    sets: ExerciseSet[];
}