 function NutritionResult({ maintenance, plan }) {
    if (!maintenance) return null;

    let calories = maintenance;
    let title = "Maintenance Calories";
    let desc = "Calories needed to maintain your current weight.";

    if (plan === "cut") {
        calories -= 530;
        title = "Cutting Plan";
        desc = "Supports fat loss with calorie deficit.";
    }

    if (plan === "bulk") {
        calories += 420;
        title = "Bulking Plan";
        desc = "Supports muscle growth with calorie surplus.";
    }

    if (plan === "recomp") {
        calories += 120;
        title = "Recomposition Plan";
        desc = "Balanced approach for fat loss and muscle gain.";
    }

    return (
        <div className="border border-[var(--color-primary)] rounded-2xl p-6">
            <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
            <p className="text-4xl  md:text-5xl font-extrabold text-[var(--color-primary)] mb-2">
                {calories} kcal
            </p>
            <p className="text-[var(--color-text-muted)]">{desc}</p>
        </div>
    );
}

 export default NutritionResult;