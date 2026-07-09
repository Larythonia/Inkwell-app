import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/Button";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/bloglisting", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setError("");
    setIsSubmitting(true);

    const result = login(form.fullname, form.email, form.password);

    if (!result.success) {
      setError(result.error);
      setIsSubmitting(false);
      return;
    }

    const destination = location.state?.from?.pathname || "/bloglisting";
    navigate(destination, { replace: true });
  };

  return (
    <main className="min-h-screen flex items-center justify-center ">

      <div className="w-full max-w-sm" >
        <div className="flex justify-center h-10 mb-3">
          <img src="/inkwell-logo.png" />
        </div>

        <div className="bg-white rounded-2xl p-6 border-2 border-brandg-500">
          <div className="text-center">
            <h1 className="text-xl">Welcome back.</h1>
            <p className="text-sm mt1 mb-3 ">Sign in to continue reading</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block mb-1 text-sm">Full name</label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="w-full border border-gray-300 placeholder:text-brandg-200 text-black text-xs rounded-lg p-3 focus:outline-none hover:bg-brand-20 hover:border-2 focus:ring-2 focus:ring-brand-500 focus:bg-brand-20"
              />
            </div>

            <div className="space-y-1">
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-300 placeholder:text-brandg-200 text-black text-xs rounded-lg p-3 hover:bg-brand-20 hover:border-2 focus:outline-none focus:ring-2 focus: ring-brand-500 "
              />
            </div>

            <label className="block mb-1 text-sm">Password</label>
            <div
              className=" flex items-center justify-between border border-gray-300 rounded-lg p-3 hover:bg-brand-20 hover:border-2 focus-within:ring-1 focus-within:ring-brand-20
        focus-within:border-brand-500"
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="border-none placeholder:text-brandg-200 text-black text-xs w-full focus:border-none focus:outline-none focus:ring-0"
              />
              <span className="px-2" onClick={onToggle}>
                {showPassword ? (
                  <FaEyeSlash className="text-black cursor-pointer" />
                ) : (
                  <FaEye className="text-black cursor-pointer" />
                )}
              </span>
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg p-3">
                {error}
              </p>
            )}

            <div className="flex justify-center mx-6">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full mt-6 font-normal "
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-4">
                    Logging in...
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>

          <div>
            <p className="text-sm mt-4 text-center">
              Don't have an account?{" "}
              <a href="/signup" className="text-brand-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default Login;
