export default function NutritionForm({
                                          form,
                                          onChange,
                                          onCalculate,
                                          formError,
                                          planError,
                                      }) {
    return (
        <div className="border border-[#E10600] rounded-2xl p-8">
            <h2 className="text-3xl font-extrabold mb-2">
                Calculate Your <span className="text-[#E10600]">Calories</span>
            </h2>

            {/* تحذير تعبئة الفورم */}
            {formError && (
                <p className="mb-4 text-red-500 font-semibold">
                    {formError}
                </p>
            )}

            <div className="space-y-4">
                <input
                    type="number"
                    name="weight"
                    placeholder="Weight (kg)"
                    value={form.weight}
                    onChange={onChange}
                    className="w-full bg-black border border-[#E10600] px-4 py-3 rounded"
                />

                <input
                    type="number"
                    name="height"
                    placeholder="Height (cm)"
                    value={form.height}
                    onChange={onChange}
                    className="w-full bg-black border border-[#E10600] px-4 py-3 rounded"
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age (years)"
                    value={form.age}
                    onChange={onChange}
                    className="w-full bg-black border border-[#E10600] px-4 py-3 rounded"
                />

                {/* الجنس بدون default */}
                <select
                    name="gender"
                    value={form.gender}
                    onChange={onChange}
                    className="w-full bg-black border border-[#E10600] px-4 py-3 rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <button
                    type="button"
                    onClick={onCalculate}
                    className="w-full mt-4 bg-[#E10600] hover:bg-red-700 transition text-white font-bold py-3 rounded-xl"
                >
                    Calculate Calories
                </button>

                {/* تحذير اختيار المسار */}
                {planError && (
                    <p className="mt-2 text-red-500 font-semibold">
                        {planError}
                    </p>
                )}
            </div>
        </div>
    );
}
