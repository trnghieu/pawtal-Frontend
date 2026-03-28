import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register as registerApi } from "../api/services";
import useAuth from "../hooks/useAuth";

const BRAND_LOGO =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
  petName: "",
  petType: "",
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("Vui lòng nhập họ và tên.");
      return;
    }

    if (!form.email.trim()) {
      setError("Vui lòng nhập email.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Vui lòng nhập số điện thoại.");
      return;
    }

    if (!form.address.trim()) {
      setError("Vui lòng nhập địa chỉ.");
      return;
    }

    if (!form.password.trim()) {
      setError("Vui lòng nhập mật khẩu.");
      return;
    }

    if (!form.confirmPassword.trim()) {
      setError("Vui lòng nhập xác nhận mật khẩu.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        password: form.password,
      };

      const res = await registerApi(payload);

      const token = res?.token || res?.data?.token;
      const user = res?.user || res?.data?.user;

      if (token) {
        login(token, user);
        navigate("/", { replace: true });
      } else {
        navigate("/dang-nhap", { replace: true });
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Đăng ký thất bại. Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-modern-page">
      <div className="auth-modern-shell">
        <div className="auth-top-mini-bar">
          <div className="auth-top-mini-brand">
            <img src={BRAND_LOGO} alt="Pawtal" className="auth-top-mini-brand__logo" />
            <span>Pawtal</span>
          </div>

          <div className="auth-top-mini-right">
            <span>Already have an account?</span>
            <Link to="/dang-nhap" className="auth-top-mini-link">
              Log in
            </Link>
          </div>
        </div>

        <div className="auth-modern-card auth-modern-card--register">
          <div className="auth-modern-visual auth-modern-visual--orange">
            <div className="auth-modern-visual__orange-content">
              <h2>Start your journey with us.</h2>
              <p>
                Every pet deserves a community that cares as much as you do.
              </p>

              <div className="auth-modern-benefits">
                <div className="auth-modern-benefit">
                  Secure and personalized pet management
                </div>
                <div className="auth-modern-benefit">
                  Join 10,000+ happy pet owners
                </div>
              </div>
            </div>
          </div>

          <div className="auth-modern-form-wrap">
            <div className="auth-modern-form-head auth-modern-form-head--register">
              <h1>Create Account</h1>
              <p>Join our community of pet lovers today.</p>
            </div>

            <form className="auth-modern-form" onSubmit={handleSubmit}>
              <div className="auth-modern-group-label">OWNER INFORMATION</div>

              <div className="auth-modern-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div className="auth-modern-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                />
              </div>

              <div className="auth-modern-inline-grid">
                <div className="auth-modern-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div className="auth-modern-field">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ"
                  />
                </div>
              </div>

              <div className="auth-modern-inline-grid">
                <div className="auth-modern-field">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                  />
                </div>

                <div className="auth-modern-field">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
              </div>

              <div className="auth-modern-group-label auth-modern-group-label--row">
                <span>PET INFORMATION (OPTIONAL)</span>
                <span className="auth-modern-optional">OPTIONAL</span>
              </div>

              <div className="auth-modern-inline-grid">
                <div className="auth-modern-field">
                  <label htmlFor="petName">Pet Name</label>
                  <input
                    id="petName"
                    name="petName"
                    value={form.petName}
                    onChange={handleChange}
                    placeholder="Buddy"
                  />
                </div>

                <div className="auth-modern-field">
                  <label htmlFor="petType">Pet Type</label>
                  <select
                    id="petType"
                    name="petType"
                    value={form.petType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {error ? (
                <div className="auth-modern-message auth-modern-message--error">
                  {error}
                </div>
              ) : null}

              <button className="auth-modern-submit" type="submit" disabled={loading}>
                {loading ? "Creating account..." : "Create Your Account"}
              </button>
            </form>

            <div className="auth-modern-bottom-note">
              By clicking “Create Your Account”, you agree to our{" "}
              <span>Terms of Service</span> and <span>Privacy Policy</span>.
            </div>
          </div>
        </div>

        <div className="auth-modern-footer auth-modern-footer--spread">
          <span>Pawtal Inc. © 2026</span>
          <div className="auth-modern-footer-links">
            <span>Support</span>
            <span>Safety</span>
            <span>Resources</span>
          </div>
        </div>
      </div>
    </div>
  );
}