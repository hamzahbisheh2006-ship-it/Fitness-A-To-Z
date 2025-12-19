export default function PlanCards({ selectedPlan, onSelect }) {
    const plans = [
        { id: "cut", title: "Cutting", desc: "Lose fat with calorie deficit" },
        { id: "bulk", title: "Bulking", desc: "Gain muscle with calorie surplus" },
        { id: "recomp", title: "Recomposition", desc: "Balance fat loss and muscle gain" },
    ];

    return (
        <div>
            <h3 className="text-2xl font-extrabold mb-4">
                Choose Your <span className="text-[#E10600]">Goal</span>
            </h3>

            <div className="grid grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => onSelect(plan.id)}
                        className={`
                            cursor-pointer
                            border rounded-xl p-6 transition
                            hover:-translate-y-1 hover:border-[#E10600]
                            ${
                            selectedPlan === plan.id
                                ? "border-[#E10600] bg-[#E10600]/15"
                                : "border-[#E10600]/50"
                        }
                        `}
                    >
                        <h4 className="text-xl font-bold text-[#E10600] mb-2">
                            {plan.title}
                        </h4>
                        <p className="text-white/80">{plan.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
