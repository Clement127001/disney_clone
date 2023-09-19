import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import RootLayout from "./Pages/RootLayout";
import "./App.css";

function App() {
  //creating the routes for the different component

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
