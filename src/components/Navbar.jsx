import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../storage/UserContext";
import { logOut } from "../service/userService";

const Navbar = () => {
  const { loggedIn, logOutUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    const shouldLogOut = window.confirm("Are you sure?");
    if (shouldLogOut) {
      logOut().then(({ data }) => {
        logOutUser(data);
        localStorage.removeItem("access_token");
        navigate("/login");
      });
    }
  };

  return (
<header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-secondary">Gallery App</a></li>
          {loggedIn ? (
           <>
          <li><a href="/create" className="nav-link px-2 text-white">Create New Gallery</a></li>
          <li><a href="/my-galleries" className="nav-link px-2 text-white">My Galleries</a></li>
          </>
          ) : null}
        </ul>

        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}
        
        <div className="text-end">
        {loggedIn ? (
          <>
          <button href="#" className="btn btn-outline-success me-2">{user?.user.first_name} {user?.user.last_name}</button>
          <button 
            className="btn btn-outline-danger"
            type="submit"
            onClick={() => handleLogOut()}
          >
              Log out
          </button>
          </>
          ) : (
          <>
          <a href="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
          <a href="/register"><button type="button" className="btn btn-warning">Register</button></a>
          </>
          )}
        </div>
      </div>
    </div>
  </header>
  
  );

};
export default Navbar;
