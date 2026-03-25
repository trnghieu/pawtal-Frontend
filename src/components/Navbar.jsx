import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const menuConfig = [
  {
    label: 'Hồ sơ',
    key: 'profile',
    items: [
      { to: '/ho-so/dinh-danh', label: 'Hồ sơ định danh' },
      { to: '/ho-so/suc-khoe', label: 'Hồ sơ sức khỏe' },
    ]
  },
  {
    label: 'Dịch vụ',
    key: 'services',
    items: [
      { to: '/dich-vu/dinh-vi', label: 'Định vị' },
      { to: '/dich-vu/mua-sam', label: 'Mua sắm' },
      { to: '/dich-vu/goi-dich-vu', label: 'Gói dịch vụ' },
      { to: '/dich-vu/dinh-vi', label: 'Theo dõi vị trí' }
    ]
  },
  { label: 'Cộng đồng', to: '/cong-dong' },
  { label: 'CSKH', to: '/cskh' }
];

export default function Navbar() {
  const [openKey, setOpenKey] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="page-shell topbar-inner">
        <button className="mobile-menu-btn" onClick={() => setMobileOpen((v) => !v)} aria-label="Mở menu">
          ☰
        </button>
        <nav className={`nav-grid ${mobileOpen ? 'is-open' : ''}`}>
          <div className="nav-group nav-left">
            {menuConfig.slice(0, 2).map((item) => (
              item.items ? (
                <div
                  key={item.key}
                  className="nav-dropdown"
                  onMouseEnter={() => setOpenKey(item.key)}
                  onMouseLeave={() => setOpenKey('')}
                >
                  <button className={`nav-button ${openKey === item.key ? 'active' : ''}`} onClick={() => setOpenKey(openKey === item.key ? '' : item.key)}>
                    {item.label}
                  </button>
                  <div className={`dropdown-menu ${openKey === item.key ? 'show' : ''}`}>
                    {item.items.map((sub) => (
                      <NavLink key={sub.to} to={sub.to} className="dropdown-link" onClick={() => setMobileOpen(false)}>
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : null
            ))}
          </div>
          <Link to="/" className="brand-mark" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Pawtal" />
          </Link>
          <div className="nav-group nav-right">
            {menuConfig.slice(2).map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            {isAuthenticated ? (
              <button className="nav-cta ghost" onClick={logout}>Đăng xuất</button>
            ) : (
              <NavLink to="/dang-nhap" className="nav-cta" onClick={() => setMobileOpen(false)}>Đăng nhập</NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
