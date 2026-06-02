import type {Exercise} from "@/types/Exercise.ts";

export interface Workout {
    id: string;
    userId: string;
    date: Date;
    exercises: Exercise[];
    duration: number;
}