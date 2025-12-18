import { Routes, Route } from "react-router-dom";
import NutritionAndCalories from "./containers/NutritionAndCalories/NutritionAndCalories";

function App() {
    return (
        <Routes>
            <Route
                path="/nutrition"
                element={<NutritionAndCalories />}
            />
        </Routes>
    );
}

export default App;
