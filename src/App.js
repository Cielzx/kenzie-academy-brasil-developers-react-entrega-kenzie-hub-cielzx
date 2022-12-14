import { Rout } from "./routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./Providers/UserContext";
import { ModalForm } from "./components/ModalForm";
import { EditModalForm } from "./components/EditForm";
import { TechProvider } from "./Providers/TechContex";

const App = () => {
  const { user, setUser, modalIsopen, editIsOpen } = useContext(UserContext);

  const [logged, setLogged] = useState(false);

  return (
    <div>
      <Rout logged={logged} />

      {modalIsopen ? <ModalForm /> : null}
      {editIsOpen ? <EditModalForm /> : null}
      <ToastContainer
        position="top-right"
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
};

export default App;
