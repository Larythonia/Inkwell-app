import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { User } from "lucide-react";
import { Button } from "../ui/Button";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center bg-brand-50 fixed top-0 left-0 right-0 w-full px-9 sm:px-10 md:px-16 py-3 z-50">
      <div className="w-20">
        <img src="/inkwell-logo.png" />
      </div>

      {/* Desktop Max */}
      <div className="hidden md:flex justify-center items-center gap-6">
        <div className="flex justify-center items-center">
          <User className="w-8 h-8 bg-brand-10 rounded-full p-1" />
        <span className="px-2">
          {user?.fullname?.split(" ")[0] || "Guest"}</span>
        </div>
    
        <div>
          <Button variant="secondary" size="sm" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>

      {/*Mobile hamburger */}
      <Button className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "X" : "☰"}
          </Button>

        {/*Mobile Dropdown menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col h-38 gap-2 p-4 fixed top-14 right-0 bg-brand-50 z-30">
        

                <div className="flex flex-col items-center gap-2">
            <User className="w-7 h-7 bg-brand-10 rounded-full p-1" />
            <span>{user?.fullname?.split(" ")[0] || "Guest"}</span>
          </div>

          <Button variant="secondary" size="sm" onClick={handleLogout}>
            Log out
          </Button>
            </div>
          )}
    </nav>
  );
};

export default Navbar;
