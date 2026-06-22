import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../auth/AuthContext";

function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: null, message: "" });

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setStatus({ type: null, message: "" });

    try {
      await signup({ name: values.name, email: values.email, password: values.password });
      setStatus({ type: "success", message: "Account created. Redirecting to dashboard…" });
      navigate("/dashboard");
    } catch (error) {
      setStatus({ type: "error", message: error.response?.data?.message || "Signup failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg rounded-[2rem] bg-slate-900/95 border border-slate-800 p-8 shadow-2xl">
        <h1 className="text-center text-3xl font-semibold text-white">Create an account</h1>
        <p className="mt-2 text-center text-sm text-slate-400">Sign up now to track your expenses and budget smarter.</p>

        {status.message ? (
          <div className={`mt-6 rounded-2xl p-4 text-sm ${status.type === "success" ? "bg-emerald-500/15 text-emerald-200" : "bg-rose-500/15 text-rose-200"}`}>
            {status.message}
          </div>
        ) : null}

        <Formik initialValues={{ name: "", email: "", password: "", confirmPassword: "" }} validationSchema={SignupSchema} onSubmit={handleSubmit}>
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-200">Name</label>
                <Field
                  name="name"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
                {errors.name && touched.name ? <p className="mt-2 text-xs text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
                {errors.email && touched.email ? <p className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
                {errors.password && touched.password ? <p className="mt-2 text-xs text-rose-300">{errors.password}</p> : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="mt-2 text-xs text-rose-300">{errors.confirmPassword}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating account..." : "Signup"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already a member?{' '}
          <Link to="/auth/login" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
