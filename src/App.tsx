import { Routes, Route } from 'react-router-dom';
import {DashboardPage} from "@/pages/DashboardPage.tsx";
import {WorkoutPage} from "@/pages/WorkoutPage.tsx";
import {SelectExercisePage} from "@/pages/SelectExercisePage.tsx";
import {LoginPage} from "@/pages/LoginPage.tsx";
import {RegisterPage} from "@/pages/RegisterPage.tsx";
import {Navbar} from "@/components/Navbar.tsx";

// TODO 404 page?
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/workout" element={<WorkoutPage/>} />
        <Route path="/workout/select-exercise" element={<SelectExercisePage/>} />
        <Route path="*" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App
