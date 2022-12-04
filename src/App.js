import { Rout } from "./routes";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Api } from "./services/api";
import { toast } from "react-toastify";
import { PageLogin } from "./pages/LoginPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [logged, setLogged] = useState(false);

  return (
    <div>
      <Rout
        logged={logged}
        user={user}
        setUser={setUser}
        setLogged={setLogged}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
