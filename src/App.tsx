import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import CaseStudyPage from "./pages/case-study";
import ContactPage from "./pages/contact/page";
import Homepage from "./pages/homepage";
import NotFound from "./pages/not-found/page";

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
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
