import Registration from "pages/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "pages/Profile";
import Root from "components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
        index: true,
        element: <Registration />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider
          router={router}
      />
  );
}

export default App;