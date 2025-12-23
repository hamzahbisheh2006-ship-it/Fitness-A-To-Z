import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home"; 
import Exercises from "./containers/Exercises_page/Exercises";
import NutritionAndCalories from "./containers/NutritionAndCalories/NutritionAndCalories";
import Memberships from "./containers/Memberships/Memberships";
import About from "./containers/About/About";
import SupplementsPage from './pages/supplementpage/Supplements';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nutrition" element={<NutritionAndCalories />} />
      <Route path="/about" element={<About />} />
       <Route path="/memberships" element={<Memberships />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/Supplements" element={<SupplementsPage />} />
    </Routes>
  );

}
export default App;
