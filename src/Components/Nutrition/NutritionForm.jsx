import { useForm } from "react-hook-form";

 function NutritionForm({ onCalculate }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="border border-[var(--color-primary)] rounded-2xl p-8">
            <h2 className="text-3xl font-extrabold mb-2">
                Calculate Your <span className="text-[var(--color-primary)]">Calories</span>
            </h2>


            <form onSubmit={handleSubmit(onCalculate)}
                  className="space-y-4">

                <input
                    type="number"
                    placeholder="Weight (kg)"
                    {...register("weight", { required: true })}
                    className="no-spinner w-full bg-black border border-[var(--color-primary)] px-4 py-3 rounded"
                />
                {errors.weight && (
                    <p className="text-[var(--color-error)] text-sm">Weight is required</p>
                )}


                <input
                    type="number"
                    placeholder="Height (cm)"
                    {...register("height", { required: true })}
                    className="no-spinner w-full bg-black border border-[var(--color-primary)] px-4 py-3 rounded"
                />
                {errors.height && (
                    <p className="text-[var(--color-error)] text-sm">Height is required</p>
                )}


                <input
                    type="number"
                    placeholder="Age (years)"
                    {...register("age", { required: true })}
                    className="no-spinner w-full bg-black border border-[var(--color-primary)] px-4 py-3 rounded"
                />
                {errors.age && (
                    <p className="text-[var(--color-error)] text-sm">Age is required</p>
                )}



                <select
                    {...register("gender", { required: true })}
                    className="w-full bg-black border border-[var(--color-primary)] px-4 py-3 rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && (
                    <p className="text-[var(--color-error)] text-sm">Gender is required</p>
                )}


                <button
                    type="submit"
                    className="w-full mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition text-white font-bold py-3 rounded-xl"
                >
                    Calculate Calories
                </button>
            </form>
        </div>
    );
}
export default NutritionForm;