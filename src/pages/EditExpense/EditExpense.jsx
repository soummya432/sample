import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addExpenseSchema } from "../../utils/formSchemas";
import { transactions } from "../../utils/mockData";
import "./EditExpense.css";

function EditExpense() {
  const { expenseId } = useParams();
  const navigate = useNavigate();
  const transaction = useMemo(() => transactions.find((item) => item.id === expenseId), [expenseId]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addExpenseSchema),
    defaultValues: {
      title: transaction?.title || "",
      amount: transaction?.amount || "",
      category: transaction?.category || "",
      date: transaction?.date || "",
      notes: transaction?.notes || "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    alert("Expense updated successfully.");
    navigate("/transactions");
  };

  if (!transaction) {
    return (
      <div className="page-shell edit-expense-page">
        <div className="transactions-empty glass-card">
          <h3>Expense not found</h3>
          <p>That expense no longer exists. Return to transactions to continue.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell edit-expense-page">
      <div className="form-card glass-card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Edit Expense</p>
            <h2>Update transaction details</h2>
          </div>
        </div>

        <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-grid">
            <label>
              Title
              <input type="text" {...register("title")} />
              {errors.title && <span>{errors.title.message}</span>}
            </label>
            <label>
              Amount
              <input type="number" step="0.01" {...register("amount", { valueAsNumber: true })} />
              {errors.amount && <span>{errors.amount.message}</span>}
            </label>
            <label>
              Category
              <input type="text" {...register("category")} />
              {errors.category && <span>{errors.category.message}</span>}
            </label>
            <label>
              Date
              <input type="date" {...register("date")} />
              {errors.date && <span>{errors.date.message}</span>}
            </label>
            <label className="full-width">
              Notes
              <textarea rows="4" {...register("notes")} />
              {errors.notes && <span>{errors.notes.message}</span>}
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" disabled={isSubmitting}>Update expense</button>
            <button type="button" className="secondary" onClick={() => navigate("/transactions")}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditExpense;
