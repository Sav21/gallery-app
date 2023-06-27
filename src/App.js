import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllGalleries from "./components/AllGalleries";
import SignUp from "./register/SignUp";
import SignIn from "./register/SignIn";

function App() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <Routes>
        <Route index path="/" element={<AllGalleries />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
