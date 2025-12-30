import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");



  return (
    <header className="header">
      <div className="header-container">
        {/* LEFT */}
        <div className="header-left">🍽️ Restaurant Booking</div>

        {/* CENTER */}
        <div className="header-center">
          <Link to="/">Home</Link>

          {token && role === "USER" && (
            <>
              <Link to="/book">Book Table</Link>
              <Link to="/my-reservations">My Reservations</Link>
            </>
          )}

          {token && role === "ADMIN" && (
            <Link to="/admin">Admin Dashboard</Link>
          )}
        </div>

        {/* RIGHT */}
        <div className="header-right">
          {!token && (
            <>
              <Link className="header-btn login-btn" to="/">
                Login
              </Link>
              <Link className="header-btn book-btn" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
