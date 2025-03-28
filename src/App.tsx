import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <div>hello my dear error</div>,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
