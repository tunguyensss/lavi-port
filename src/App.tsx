import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import CaseStudyPage from "./pages/case-study";
import Homepage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "case-study/:id",
        element: <CaseStudyPage />,
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
