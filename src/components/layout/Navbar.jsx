import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const profileMenu = [
  { label: "Hồ sơ định danh", to: "/ho-so/dinh-danh" },
  { label: "Hồ sơ sức khỏe", to: "/ho-so/suc-khoe" },
];

const serviceMenu = [
  { label: "Định vị", to: "/dich-vu/dinh-vi" },
  { label: "Mua sắm", to: "/dich-vu/mua-sam" },
  { label: "Gói dịch vụ", to: "/dich-vu/goi-dich-vu" },
];

const PAWTAL_LOGO =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

function isActiveGroup(pathname, prefix) {
  return pathname.startsWith(prefix);
}

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setHoveredMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setHoveredMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const profileActive = isActiveGroup(location.pathname, "/ho-so");
  const serviceActive = isActiveGroup(location.pathname, "/dich-vu");

  const profileHighlighted =
    profileActive || hoveredMenu === "profile" || openMenu === "profile";

  const serviceHighlighted =
    serviceActive || hoveredMenu === "service" || openMenu === "service";

  function toggleMenu(menuName) {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  }

  return (
    <header className="site-navbar" ref={navRef}>
      <>
        <nav className="site-navbar__inner">
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Mở menu"
          >
            ☰
          </button>

          <div
            className="nav-dropdown"
            onMouseEnter={() => {
              setHoveredMenu("profile");
              setOpenMenu("profile");
            }}
            onMouseLeave={() => {
              setHoveredMenu(null);
              setOpenMenu((prev) => (prev === "profile" ? null : prev));
            }}
          >
            <button
              type="button"
              className={`nav-parent-btn ${profileHighlighted ? "active" : ""}`}
              onClick={() => toggleMenu("profile")}
            >
              HỒ SƠ
            </button>

            {openMenu === "profile" && (
              <div className="nav-dropdown-menu">
                {profileMenu.map((item) => (
                  <NavLink key={item.to} to={item.to} className="nav-dropdown-item">
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => {
              setHoveredMenu("service");
              setOpenMenu("service");
            }}
            onMouseLeave={() => {
              setHoveredMenu(null);
              setOpenMenu((prev) => (prev === "service" ? null : prev));
            }}
          >
            <button
              type="button"
              className={`nav-parent-btn ${serviceHighlighted ? "active" : ""}`}
              onClick={() => toggleMenu("service")}
            >
              DỊCH VỤ
            </button>

            {openMenu === "service" && (
              <div className="nav-dropdown-menu">
                {serviceMenu.map((item) => (
                  <NavLink key={item.to} to={item.to} className="nav-dropdown-item">
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <Link to="/" className="brand brand-logo" aria-label="Pawtal home">
            <img src={PAWTAL_LOGO} alt="Pawtal" />
          </Link>

          <NavLink
            to="/cong-dong"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            CỘNG ĐỒNG
          </NavLink>

          <div className="nav-right">
            <NavLink
              to="/cskh"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              CSKH
            </NavLink>

            {isAuthenticated ? (
              <button className="nav-logout-btn" type="button" onClick={logout}>
                Thoát
              </button>
            ) : null}
          </div>

        
        </nav>

        {mobileOpen && (
          <div className="mobile-nav-panel">
            <div className="mobile-nav-group">
              <div className="mobile-nav-group-title">HỒ SƠ</div>
              {profileMenu.map((item) => (
                <NavLink key={item.to} to={item.to} className="mobile-nav-link">
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-nav-group">
              <div className="mobile-nav-group-title">DỊCH VỤ</div>
              {serviceMenu.map((item) => (
                <NavLink key={item.to} to={item.to} className="mobile-nav-link">
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-nav-group">
              <div className="mobile-nav-group-title">KHÁC</div>
              <NavLink to="/cong-dong" className="mobile-nav-link">
                Cộng đồng
              </NavLink>
              <NavLink to="/cskh" className="mobile-nav-link">
                CSKH
              </NavLink>
            </div>
          </div>
        )}
      </>
    </header>
  );
}