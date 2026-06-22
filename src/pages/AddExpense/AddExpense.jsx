import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addExpenseSchema } from "../../utils/formSchemas";
import "./AddExpense.css";

const categoryOptions = ["Food", "Travel", "Entertainment", "Shopping", "Health", "Savings"];

function AddExpense() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(addExpenseSchema) });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    reset();
    alert("Expense saved successfully.");
  };

  return (
    <div className="page-shell add-expense-page">
      <div className="form-card glass-card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Add Expense</p>
            <h2>Create a new transaction</h2>
          </div>
        </div>

        <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-grid">
            <label>
              Title
              <input type="text" placeholder="Subscription payment" {...register("title")} />
              {errors.title && <span>{errors.title.message}</span>}
            </label>

            <label>
              Amount
              <input type="number" placeholder="120.00" step="0.01" {...register("amount", { valueAsNumber: true })} />
              {errors.amount && <span>{errors.amount.message}</span>}
            </label>

            <label>
              Category
              <select {...register("category")}> 
                <option value="">Choose category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <span>{errors.category.message}</span>}
            </label>

            <label>
              Date
              <input type="date" {...register("date")} />
              {errors.date && <span>{errors.date.message}</span>}
            </label>

            <label className="full-width">
              Notes
              <textarea rows="4" placeholder="Add optional notes" {...register("notes")} />
              {errors.notes && <span>{errors.notes.message}</span>}
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" disabled={isSubmitting}>Save Expense</button>
            <button type="button" className="secondary" onClick={() => reset()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
