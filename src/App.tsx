import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css'
import {DashboardPage} from "@/pages/DashboardPage.tsx";
import {WorkoutPage} from "@/pages/WorkoutPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/workout" element={<WorkoutPage/>} />
        <Route path="*" element={<DashboardPage/>} />
      </Routes>
    </>
  )
}

export default App
