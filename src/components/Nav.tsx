
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  LogIn,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Temporary state for demo
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-teal">TripGenius</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-teal transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-gray-600 hover:text-teal transition-colors">
              Explore
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-teal transition-colors">
              About
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-600 hover:text-teal transition-colors">
                  <User className="h-5 w-5" />
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={handleLogin}
                className="bg-coral hover:bg-coral/90"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {isAuthenticated ? (
              <div className="px-4 py-2 space-y-4">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="px-4 py-2">
                <Button
                  variant="default"
                  onClick={() => {
                    handleLogin();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-coral hover:bg-coral/90"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
