import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./registration/Register";
import Login from "./registration/Login";
import AddGallery from "./pages/AddGallery";
import ProtectedRoute from "./shared/ProtectedRoute";
import ViewGallery from "./pages/ViewGallery";
import MyGalleries from "./pages/MyGalleries";
import UsersGalleries from "./pages/UsersGalleries";
import { useContext, useEffect } from "react";
import UserContext from "./storage/UserContext";

function App() {
  const { checkToken } = useContext(UserContext);
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/add-gallery"
          element={
            <ProtectedRoute>
              <AddGallery/>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="galleries/:id" element={<ViewGallery />}></Route>
        <Route
          path="my-galleries"
          element={
            <ProtectedRoute>
              <MyGalleries />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="authors/:id" element={<UsersGalleries />}></Route>
        <Route
          path="edit-gallery/:id"
          element={
            <ProtectedRoute>
              <AddGallery />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
