import { useState } from "react";
import "./App.css";
import { RestrictedPage } from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Nicole";

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <RestrictedPage
        isLoggedIn={isLoggedIn}
        user={user}
        Login={Login}
        Logout={Logout}
      />
    </div>
  );
}

export default App;
