export default function NutritionResult({ maintenance, plan }) {
    let calories = maintenance;
    let title = "Maintenance Calories";
    let desc = "Calories needed to maintain your current weight.";

    if (plan === "cut") {
        calories -= 500;
        title = "Cutting Plan";
        desc = "Supports fat loss with calorie deficit.";
    }

    if (plan === "bulk") {
        calories += 400;
        title = "Bulking Plan";
        desc = "Supports muscle growth with calorie surplus.";
    }

    if (plan === "recomp") {
        title = "Recomposition Plan";
        desc = "Balanced approach for fat loss and muscle gain.";
    }

    return (
        <div className="border border-[#E10600] rounded-2xl p-6">
            <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
            <p className="text-5xl font-extrabold text-[#E10600] mb-2">
                {calories} kcal
            </p>
            <p className="text-white/80">{desc}</p>
        </div>
    );
}
