import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Homepage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import WorkPage from "./pages/WorkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
