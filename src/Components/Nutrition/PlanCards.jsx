 function PlanCards({ selectedPlan, onSelect }) {
    const plans = [
        { id: "cut", title: "Cutting", desc: "Lose fat with calorie deficit" },
        { id: "bulk", title: "Bulking", desc: "Gain muscle with calorie surplus" },
        { id: "recomp", title: "Recomposition", desc: "Balance fat loss and muscle gain" },
    ];

    return (
        <div>
            <h3 className="text-2xl font-extrabold mb-4">
                Choose Your <span className="text-[var(--color-primary)]">Goal</span>
            </h3>

            <div className="grid grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => onSelect(plan.id)}
                        className={`
                            cursor-pointer
                            border rounded-xl p-6 transition
                            hover:-translate-y-1 hover:border-[var(--color-primary)]
                            ${
                            selectedPlan === plan.id
                                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/15"
                                : "border-[var(--color-primary)]/50"
                        }
                        `}
                    >
                        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                            {plan.title}
                        </h4>
                        <p className="text-[var(--color-text-muted)]">{plan.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

 export default PlanCards;