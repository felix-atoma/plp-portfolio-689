import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MoreWorks from "./components/MoreWorks";
import Works from "./pages/Work";



import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "/work", element: <Works /> },
      { path: "more-works", element: <MoreWorks /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
