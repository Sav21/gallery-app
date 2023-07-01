import { useContext, useState } from "react";
import UserContext from "../storage/UserContext";
import { logIn } from "../service/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { logInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    logIn(user.email, user.password)
      .then(({ data }) => {
        logInUser(data.user);
        localStorage.setItem("access_token", data.authorisation.token);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);

        setError("");
        navigate("/");
      })
      .catch(() => {
        setError("Invalid email or password. Please try again.");
      });

    setUser({
      email: "",
      password: "",
    });
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (

  <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-white text-black" style={{borderRadius: "1rem;"}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
          <form onSubmit={(e) => handleSubmit(e)}>

              <h2 className="fw-bold mb-2 text-uppercase text-warning">Login</h2>
              {error && (
                        <div className="alert alert-danger mb-4" role="alert">
                          {error}
                        </div>
                      )}
              <p className="text-info-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input 
                  type="email" 
                  className="form-control form-control-lg"
                  id="floatingInput"
                  name="email"
                  onChange={handelInputChange}
                  value={user.email}
                  required
                  />
                <label className="form-label" for="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  id="floatingPassword"
                  name="password"
                  onChange={handelInputChange}
                  value={user.password}
                  required
                  />
                <label className="form-label" for="typePasswordX">Password</label>
              </div>
              <button 
                className="btn btn-info btn-lg px-5" 
                type="submit"
                disabled={!user.email || !user.password}
                >
                Login
              </button>

              </form>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="/register" className="text-info-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
export default Login;
