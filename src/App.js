import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />
    },
    {
      path: "/home",
      element: <Homepage />
    }
  ]);

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
