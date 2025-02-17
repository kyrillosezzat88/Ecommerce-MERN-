import { createRoot } from "react-dom/client";
import "./styles/global.css";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import store from "@store/store";
import "./services/axios-global";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastContainer />
    <AppRouter />
  </Provider>
);
