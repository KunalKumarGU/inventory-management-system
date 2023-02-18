import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"


function App() {
  const {currentUser} = useContext(AuthContext);
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login/"/>
    }
    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
