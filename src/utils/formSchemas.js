import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export const signupSchema = z
  .object({
    name: z.string().min(2, "Name must contain at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(8, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

export const addExpenseSchema = z.object({
  title: z.string().min(2, "Title is required."),
  amount: z.number({ invalid_type_error: "Amount must be a number." }).positive("Please enter a positive amount."),
  category: z.string().min(1, "Select a category."),
  date: z.string().min(1, "Date is required."),
  notes: z.string().optional(),
});
