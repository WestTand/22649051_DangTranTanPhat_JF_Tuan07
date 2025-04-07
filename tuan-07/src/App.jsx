import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./pages/RootPage"
import Analytics from "./pages/Analytics"
import Project from "./components/DetailReport"
import Team from "./pages/Team"
import Messages from "./pages/Messages"
import Intergration from "./pages/Intergration"

const routerProvider = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path: '/',
          element: <Project />
        },
        {
          path: '/teams',
          element: <Team />
        },
        {
          path: '/analytics',
          element: <Analytics />
        },
        {
          path: '/mess',
          element: <Messages />
        },
        {
          path: '/intergration',
          element: <Intergration />
        },
      ]
    }
  ]
)


function App() {
  return (
    <RouterProvider router={routerProvider} />
  )
}

export default App
