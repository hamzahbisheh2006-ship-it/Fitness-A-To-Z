import { Routes, Route } from "react-router-dom";
import NutritionAndCalories from "./containers/NutritionAndCalories/NutritionAndCalories";
import Memberships from "./containers/Memberships/Memberships";


function App() {
    return (
        <Routes>
            <Route path="/nutrition" element={<NutritionAndCalories />} />
            <Route path="/memberships" element={<Memberships />} />

        </Routes>
    );
}

export default App;
