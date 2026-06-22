import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/formSchemas";
import { useAuthContext } from "./AuthContext";
import "./Auth.css";

function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: "", message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values) => {
    setStatus({ type: "", message: "" });

    try {
      await login({ email: values.email, password: values.password });
      setStatus({ type: "success", message: "Welcome back! Redirecting to dashboard..." });
      navigate("/dashboard");
    } catch (error) {
      setStatus({ type: "error", message: "Login failed. Check your credentials and try again." });
    }
  };

  return (
    <div className="auth-page auth-login">
      <section className="auth-panel">
        <div className="auth-title">
          <span className="auth-badge">Expense Tracker</span>
          <h1>Secure login</h1>
          <p>Sign in to access your personal finance dashboard.</p>
        </div>

        {status.message && <div className={`auth-notice ${status.type}`}>{status.message}</div>}

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" {...register("email")} />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" {...register("password")} />
            {errors.password && <span className="form-error">{errors.password.message}</span>}
          </div>

          <button className="auth-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="auth-footer">
          Don&apos;t have an account? <Link to="/auth/signup">Create one</Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
