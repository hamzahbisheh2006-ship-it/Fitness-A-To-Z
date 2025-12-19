import { useState } from "react";
import NutritionForm from "../../Components/Nutrition/NutritionForm";
import PlanCards from "../../Components/Nutrition/PlanCards";
import NutritionResult from "../../Components/Nutrition/NutritionResult";
import MealSuggestions from "../../Components/Nutrition/MealSuggestions.jsx";
import Header from "../../Components/Header/Header";



export default function NutritionAndCalories() {
    const [form, setForm] = useState({
        weight: "",
        height: "",
        age: "",
        gender: "",   // بدون default
    });

    const [maintenance, setMaintenance] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [formError, setFormError] = useState("");
    const [planError, setPlanError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setFormError("");
    };

    const calculate = () => {
        const w = +form.weight;
        const h = +form.height;
        const a = +form.age;
        const g = form.gender;

        if (!w || !h || !a || !g) {
            setFormError("Please fill all fields before calculating calories.");
            setMaintenance(null);
            setSelectedPlan(null);
            return;
        }

        // BMR بدون Activity
        const bmr =
            g === "male"
                ? 10 * w + 6.25 * h - 5 * a + 5
                : 10 * w + 6.25 * h - 5 * a - 161;

        setMaintenance(Math.round(bmr));
        setFormError("");
        setPlanError("");
        setSelectedPlan(null);
    };

    const handlePlanSelect = (plan) => {
        if (!maintenance) {
            setPlanError("Please calculate calories first.");
            return;
        }
        setPlanError("");
        setSelectedPlan(plan);
    };

    return (
        <div className="min-h-screen bg-black text-white px-6 pt-20 pb-16">
            <Header />
            <div className="max-w-5xl mx-auto space-y-10">
                <NutritionForm
                    form={form}
                    onChange={handleChange}
                    onCalculate={calculate}
                    formError={formError}
                    planError={planError}
                />

                <PlanCards
                    selectedPlan={selectedPlan}
                    onSelect={handlePlanSelect}
                />

                {maintenance &&  (
                    <>
                    <NutritionResult
                        maintenance={maintenance}
                        plan={selectedPlan}
                    />
                    <MealSuggestions plan={selectedPlan}/>
                    </>
                )}
            </div>
        </div>
    );
}
