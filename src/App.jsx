import { Routes, Route } from "react-router-dom";
import SupplementsPage from './pages/Supplements';
// import NutritionAndCalories from "./containers/NutritionAndCalories/NutritionAndCalories";

function App() {
    return (
        <Routes>
            {/* <Route
                path="/nutrition"
                element={<NutritionAndCalories />}
            /> */}
            <Route
                path="/Supplements"
                element={<SupplementsPage/>}
            />
        </Routes>
    );
}

export default App;
