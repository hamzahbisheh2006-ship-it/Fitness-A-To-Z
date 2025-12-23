import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home"; 
import NutritionAndCalories from "./containers/NutritionAndCalories/NutritionAndCalories";
import Memberships from "./containers/Memberships/Memberships";
import About from "./containers/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nutrition" element={<NutritionAndCalories />} />
      <Route path="/about" element={<About />} />
       <Route path="/memberships" element={<Memberships />} />
    </Routes>
  );
}
export default App;
