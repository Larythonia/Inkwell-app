import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { User } from "lucide-react";
import { Button } from "../ui/Button";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="flex justify-between items-center bg-brand-50 fixed top-0 left-0 right-0 w-full px-16 py-3 z-200">
      <div className="w-20">
        <img src="/inkwell-logo.png" />
      </div>

      <div className="flex justify-center items-center gap-6">
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
    </main>
  );
};

export default Navbar;
