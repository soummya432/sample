import { useAuthContext } from "../auth/AuthContext";

export default function useAuth() {
  return useAuthContext();
}
