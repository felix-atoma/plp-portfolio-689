import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MoreWorks from "./components/MoreWorks";
import Works from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader"; // ✅ Import the spinner loader

// ✅ Your router setup
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
  const [loading, setLoading] = useState(true);

  // ✅ Show loader for 2 seconds (can be tied to actual data load)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader onFinish={() => setLoading(false)} /> : <RouterProvider router={router} />;
}

export default App;
