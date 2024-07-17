import './App.css';
import { Outlet,Link } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";

import ProfileCard from './components/ProfileCard';
import Home from './pages/Home';
import ResearchPage from './pages/ResearchPage';
import TeachingPage from './pages/TeachingPage';

const Nav = () =>{
    return (
        <div className='template'>
          <nav className='nav-container'>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/experience">Experience</Link>
                    <Link className='nav-link' to="/research">Research</Link>
                    <Link className='nav-link' to="/teaching">Teaching</Link>
                    <Link className='nav-link' to="/achievements">Achievements</Link>
                    <Link className='nav-link' to="/cv">CV</Link>
                    <Link className='nav-link' to="/blogs">Blogs</Link>
          </nav>
          <div className='sized-box'></div>
          <div className="application">
              <div className='col-1'><ProfileCard/></div>
              <div className='dummy-col'></div>
              <div className='col-2'>
                <Outlet/>
                <div className='site-map'></div>
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
          path:"/experience",
          element:<h1>experience</h1>
        },
        {
          path:"/research",
          element:<ResearchPage/>

        },
        {
          path:"/teaching",
          element:<TeachingPage/>

        },
        {
          path:"/achievements",
          element:<h1>achievements</h1>

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
