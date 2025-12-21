import { useState } from "react";
import NutritionForm from "../../Components/Nutrition/NutritionForm";
import PlanCards from "../../Components/Nutrition/PlanCards";
import NutritionResult from "../../Components/Nutrition/NutritionResult";
import MealSuggestions from "../../Components/Nutrition/MealSuggestions.jsx";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"

export default function NutritionAndCalories() {
    const [maintenance, setMaintenance] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [planError, setPlanError] = useState("");

    const calculate = (data) => {
        const w = +data.weight;
        const h = +data.height;
        const a = +data.age;
        const g = data.gender;

        const bmr =
            g === "male"
                ? 10 * w + 6.25 * h - 5 * a + 5
                : 10 * w + 6.25 * h - 5 * a - 161;

        setMaintenance(Math.round(bmr));
        setSelectedPlan(null);
        setPlanError("");
    };

    const handlePlanSelect = (plan) => {
        if (!maintenance) {
            setPlanError("Please fill the form and calculate calories first");
            return;
        }
        setSelectedPlan(plan);
    };


    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/nutritionPic.jpg')",
            }}
        >
            <div className="min-h-screen bg-black/75 backdrop-blur-sm text-white">
                <Header />

                <div className="px-6 pt-28 pb-16">
                    <div className="max-w-5xl mx-auto space-y-10">

                        <NutritionForm onCalculate={calculate} />


                        {planError && (
                            <p className="text-red-500 font-semibold">
                                {planError}
                            </p>
                        )}

                        <PlanCards
                            selectedPlan={selectedPlan}
                            onSelect={handlePlanSelect}

                        />


                        {maintenance && (
                            <>
                                <NutritionResult
                                    maintenance={maintenance}
                                    plan={selectedPlan}
                                />

                                {selectedPlan && (
                                    <MealSuggestions plan={selectedPlan} />
                                )}

                                {planError && (
                                    <p className="text-red-500 font-semibold">{planError}</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
