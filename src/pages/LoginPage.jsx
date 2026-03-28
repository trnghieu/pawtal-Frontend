import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/services";
import useAuth from "../hooks/useAuth";

const BRAND_LOGO =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const redirectTo = location.state?.from || "/";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email.trim()) {
      setError("Vui lòng nhập email.");
      return;
    }

    if (!form.password.trim()) {
      setError("Vui lòng nhập mật khẩu.");
      return;
    }

    try {
      setLoading(true);

      const res = await loginApi({
        email: form.email,
        password: form.password,
      });

      const token = res?.token || res?.data?.token;
      const user = res?.user || res?.data?.user;

      if (!token) {
        throw new Error("Không nhận được token đăng nhập.");
      }

      login(token, user);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Đăng nhập thất bại. Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-modern-page">
      <div className="auth-modern-shell">
        <div className="auth-modern-card auth-modern-card--login">
          <div className="auth-modern-visual auth-modern-visual--image">
            <img src={SIDE_IMAGE} alt="Welcome to Pawtal" className="auth-modern-visual__image" />
            <div className="auth-modern-visual__overlay">
              <h2>Welcome back to Pawtal</h2>
              <p>
                Manage your pet’s wellness, appointments and joy in one place.
              </p>
            </div>
          </div>

          <div className="auth-modern-form-wrap">
            <div className="auth-modern-brand">
              <img src={BRAND_LOGO} alt="Pawtal" className="auth-modern-brand__logo" />
              <span>Pawtal</span>
            </div>

            <div className="auth-modern-form-head">
              <h1>Login</h1>
              <p>Log in to your pet’s happy place</p>
            </div>

            <form className="auth-modern-form" onSubmit={handleSubmit}>
              <div className="auth-modern-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="auth-modern-field">
                <div className="auth-modern-field__row">
                  <label htmlFor="password">Password</label>
                  <button type="button" className="auth-modern-link-btn">
                    Forgot password?
                  </button>
                </div>

                <div className="auth-modern-password-wrap">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="auth-modern-password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error ? (
                <div className="auth-modern-message auth-modern-message--error">
                  {error}
                </div>
              ) : null}

              <button className="auth-modern-submit" type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Sign in →"}
              </button>
            </form>

            <div className="auth-modern-divider">
              <span>Or continue with</span>
            </div>

            <div className="auth-modern-socials">
              <button type="button" className="auth-modern-social-btn">
                Google
              </button>
              <button type="button" className="auth-modern-social-btn">
                Facebook
              </button>
            </div>

            <div className="auth-modern-bottom-text">
              New to Pawtal?{" "}
              <Link to="/dang-ky" className="auth-modern-inline-link">
                Create an account
              </Link>
            </div>
          </div>
        </div>

        <div className="auth-modern-footer">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
}