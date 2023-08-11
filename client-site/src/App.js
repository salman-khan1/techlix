import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
]);
function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
