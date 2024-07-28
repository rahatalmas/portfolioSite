import './App.css';
import { Outlet,Link } from 'react-router-dom';
import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';

const Nav = () =>{
    return (
        <div className='template'>
          <nav className='nav-container'>           
              <h2 className='logo'>Rahat Almas</h2>
             <div>
             <Link className='nav-link' to="/">About</Link>
                    <Link className='nav-link' to="/cv">CV</Link>
                    <Link className='nav-link' to="/blogs">Blogs</Link>
             </div>
          </nav>
          <div className="application">
              <div className='main-pages'>
                <Outlet/>

              </div>
          </div>
        </div>
    );
}


const App = createBrowserRouter([
    {
      path: "/",
      element:<Nav/>,
      children:[ 
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/cv",
          element:<h1>Cv</h1>

        },
        {
          path:"/blogs",
          element:<h1>Blogs</h1>
        }
      ]
    },
  ]);

export default App;
