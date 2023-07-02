import { useContext, useState } from "react";
import { registerUser } from "../service/userService";
import { useNavigate } from "react-router-dom";
import UserContext from "../storage/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { logInUser } = useContext(UserContext);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [isAccepted, setIsAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAccepted === true) {
      const { password, password_confirmation } = user;

      if (password.length < 8) {
        setError("Password must be at least 8 characters long.");
        return;
      }

      if (!/\d/.test(password)) {
        setError("Password must contain at least 1 number.");
        return;
      }

      if (password !== password_confirmation) {
        setError("Passwords do not match.");
        return;
      }

      registerUser(
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.password_confirmation
      )
        .then(({ data }) => {
          logInUser(data);
          localStorage.setItem("access_token", data.authorisation.token);
          setError("");
          setUser({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
          alert("Registration successful, welcome!");
          navigate("/login");
        })
        .catch(() => {
          setError("Email already exists. Please choose another email.");
        });
    }
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleChecked = () => {
    setIsAccepted(!isAccepted);
  };

  return (
<section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card" style={{borderRadius: "15px;"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center text-info mb-5">Create an account</h2>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
              )}
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="form-outline mb-4">
                  <input 
                  type="text" 
                  id="form3Example1cg" 
                  className="form-control form-control-lg"
                  name="first_name"
                  onChange={handelInputChange}
                  value={user.first_name}
                  required
                  />
                  <label className="form-label" for="form3Example1cg">First Name</label>
                </div>
                <div className="form-outline mb-4">
                  <input 
                  type="text" 
                  id="form3Example1cg" 
                  className="form-control form-control-lg"
                  name="last_name"
                  onChange={handelInputChange}
                  value={user.last_name}
                  required
                  />
                  <label className="form-label" for="form3Example1cg">Last Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                    type="email" 
                    id="form3Example3cg" 
                    className="form-control form-control-lg" 
                    name="email"
                    onChange={handelInputChange}
                    value={user.email}
                    required
                    />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                    type="password" 
                    id="form3Example4cg" 
                    className="form-control form-control-lg"       
                    name="password"
                    onChange={handelInputChange}
                    value={user.password}
                    />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                    type="password" 
                    id="form3Example4cdg" 
                    className="form-control form-control-lg" 
                    name="password_confirmation"
                    onChange={handelInputChange}
                    value={user.password_confirmation}
                  />
                  <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input 
                    className="form-check-input me-2" 
                    type="checkbox" 
                    id="form2Example3cg" 
                    checked={isAccepted}
                    onChange={handleChecked}
                    name="isAccepted"
                    value={isAccepted}
                    required
                    />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button  
                    type="submit"
                    className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">
                      Register
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                    className="text-info-50 fw-bold"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
export default Register;
