import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "services",
    element: <Services></Services>,
  },
]);
function App() {
  return (
    <div className="App">
     
     <RouterProvider router={router} />

    </div>
  );
}

export default App;
