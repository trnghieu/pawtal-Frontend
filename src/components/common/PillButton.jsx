import { Link } from "react-router-dom";

export default function PillButton({
  to,
  children,
  className = "",
  type = "link",
  ...props
}) {
  if (type === "button") {
    return (
      <button className={`pill-button ${className}`} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={`pill-button ${className}`}>
      {children}
    </Link>
  );
}