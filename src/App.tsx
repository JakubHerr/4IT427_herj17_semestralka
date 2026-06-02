import { Routes, Route } from 'react-router-dom';
import './App.css'
import {DashboardPage} from "@/pages/DashboardPage.tsx";
import {WorkoutPage} from "@/pages/WorkoutPage.tsx";
import {SelectExercisePage} from "@/pages/SelectExercisePage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/workout" element={<WorkoutPage/>} />
        <Route path="/workout/select-exercise" element={<SelectExercisePage/>} />
        <Route path="*" element={<DashboardPage/>} />
      </Routes>
    </>
  )
}

export default App
