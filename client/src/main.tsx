import { createRoot } from "react-dom/client";
import "./styles/global.css";
import AppRouter from "@routes/AppRouter";

createRoot(document.getElementById("root")!).render(<AppRouter />);
