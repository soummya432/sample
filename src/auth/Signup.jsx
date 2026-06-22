import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../utils/formSchemas";
import { useAuthContext } from "./AuthContext";
import "./Auth.css";

function Signup() {
  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: "", message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (values) => {
    setStatus({ type: "", message: "" });

    try {
      await signup({ name: values.name, email: values.email, password: values.password });
      setStatus({ type: "success", message: "Account created successfully. Redirecting..." });
      navigate("/dashboard");
    } catch (error) {
      setStatus({ type: "error", message: "Signup failed. Please try again." });
    }
  };

  return (
    <div className="auth-page auth-signup">
      <section className="auth-panel">
        <div className="auth-title">
          <span className="auth-badge">Expense Tracker</span>
          <h1>Start tracking smarter</h1>
          <p>Create a secure account and begin managing your expenses.</p>
        </div>

        {status.message && <div className={`auth-notice ${status.type}`}>{status.message}</div>}

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" {...register("name")} />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" {...register("email")} />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" {...register("password")} />
            {errors.password && <span className="form-error">{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            <input type="password" placeholder="Repeat your password" {...register("confirmPassword")} />
            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword.message}</span>}
          </div>

          <button className="auth-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Signup"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </section>
    </div>
  );
}

export default Signup;
