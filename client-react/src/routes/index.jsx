import { createBrowserRouter } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
]);
