import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";

function App() {
  //creating the routes for the different component

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
