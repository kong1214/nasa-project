import { useContext } from "react";
import { AuthUserContext } from "./Context/AuthUserContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AuthenticateUserForm from "./components/AuthenticateUserForm/AuthenticateUserForm";

function App() {

  const isLoggedIn = localStorage.getItem('loggedIn')
  const { isAuthenticated } = useContext(AuthUserContext);
  return isAuthenticated || isLoggedIn ? (
    <>
      <Navbar />
      <Home />
    </>
  ) : (
    <AuthenticateUserForm />
  )
}

export default App;
