import { useEffect, useState } from "react";

export default function MealSuggestions({ plan }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!plan) {
            setMeals([]);
            return;
        }

        setLoading(true);
        setError("");

        fetch("/meals.json")
            .then((res) => res.json())
            .then((data) => {
                setMeals(data[plan] || []);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load meal suggestions.");
                setLoading(false);
            });
    }, [plan]);

    if (!plan) return null;

    if (loading) {
        return <p className="text-white/70">Loading meal suggestions...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!meals.length) return null;

    return (
        <div>
            <h3 className="text-2xl font-extrabold mb-4">
                Meal <span className="text-[#E10600]">Suggestions</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {meals.map((meal, i) => (
                    <div
                        key={i}
                        className="border border-[#E10600]/50 rounded-xl p-6 hover:border-[#E10600] transition"
                    >
                        <h4 className="text-xl font-bold text-[#E10600] mb-1">
                            {meal.type}
                        </h4>
                        <p className="font-semibold">{meal.name}</p>
                        <p className="text-[#E10600] font-bold mt-2">
                            {meal.calories} kcal
                        </p>
                        <p className="text-white/70 text-sm mt-1">
                            {meal.reason}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
