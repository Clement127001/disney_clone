import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import RootLayout from "./Pages/RootLayout";
import "./App.css";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";

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
        {
          path: "home",
          element: <Home />,
        },
        {
          path:"detail/:id",
          element:<MovieDetails/>
        }
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
