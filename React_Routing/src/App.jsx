import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Reports from './components/Reports'
import MockTests from './components/MockTests'
import HandleError from './components/HandleError'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>
  },
  {
    path: "/dashboard",
    element: <div>
      <Navbar />
      <Dashboard />
    </div>,
    children: [
      {path:"reports",
        element: <Reports />
      },
      {path:"mock-tests",
        element: <MockTests />
      }
    ]
  },{
    path: "/:id",
    element: <div>
      <Navbar />
      <ParamComp />
    </div>
  },
  {
    path: "*",
    element: <HandleError />
  }
])
function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
