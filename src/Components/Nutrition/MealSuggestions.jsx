import { useEffect, useState } from "react";

 function MealSuggestions({ plan }) {
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

        fetch(`${import.meta.env.BASE_URL}meals.json`)

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
        return <p className="text-[var(--color-text-muted-soft)]">Loading meal suggestions...</p>;
    }

    if (error) {
        return <p className="text-[var(--color-error)]">{error}</p>;
    }

    if (!meals.length) return null;

    return (
        <div>
            <h3 className="text-2xl font-extrabold mb-4">
                Meal <span className="text-[var(--color-primary)]">Suggestions</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {meals.map((meal, i) => (
                    <div
                        key={i}
                        className="border border-[var(--color-primary)]/50 rounded-xl p-6 hover:border-[var(--color-primary)] transition"
                    >
                        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">
                            {meal.type}
                        </h4>
                        <p className="font-semibold">{meal.name}</p>
                        <p className="text-[var(--color-primary)] font-bold mt-2">
                            {meal.calories} kcal
                        </p>
                        <p className="text-[var(--color-text-muted-soft)] text-sm mt-1">
                            {meal.reason}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default  MealSuggestions;