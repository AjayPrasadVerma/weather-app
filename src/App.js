import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import SearchPage from "./pages/Search";
import { CntxProvider } from "./context/search-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return (
    <CntxProvider>
      <RouterProvider router={router} />
    </CntxProvider>
  );
}

export default App;
