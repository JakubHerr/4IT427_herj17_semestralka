import {describe, it, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {WorkoutSet} from "./WorkoutSet";
import type {ExerciseSet} from "@/types/Set";

const mockSet: ExerciseSet = {
    id: "set-1",
    reps: 8,
    weight: 60,
    completed: false,
};

describe("WorkoutSet", () => {
    it("renders inputs pre-filled with values from the set prop", () => {
        render(<WorkoutSet set={mockSet} index={1} onToggleCompleted={() => {}} />);

        expect(screen.getByDisplayValue("60")).toBeInTheDocument();
        expect(screen.getByDisplayValue("8")).toBeInTheDocument();
        expect(screen.getByText("#1")).toBeInTheDocument();
    });

    it("calls onToggleCompleted with the entered weight, reps, and completed=true on submit", async () => {
        const user = userEvent.setup();
        const onToggleCompleted = vi.fn();

        render(<WorkoutSet set={mockSet} index={2} onToggleCompleted={onToggleCompleted} />);

        const [weightInput, repsInput] = screen.getAllByRole("spinbutton");

        await user.clear(weightInput);
        await user.type(weightInput, "80");
        await user.clear(repsInput);
        await user.type(repsInput, "12");

        await user.click(screen.getByRole("button", {name: /uložit/i}));

        expect(onToggleCompleted).toHaveBeenCalledOnce();
        expect(onToggleCompleted).toHaveBeenCalledWith(80, 12, true);
    });
});
