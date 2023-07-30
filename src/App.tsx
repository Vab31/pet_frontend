import './App.css';
import Nav from './component/nav';

import { render } from 'react-dom';
import Login from './component/login';
// import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Combine from './component/combine';
import AddData from './component/adddata';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');
  console.log(isLoggedIn);
  return (
    <div className="App">
     <Nav/>
    
     <BrowserRouter>
      <Routes>
   
       {/* <Route path="addAdmin" element={<Signup/>}/> */}
          <Route path='admin' element={<Login/>}/>
          <Route path='/' element={<Combine/>}/>
          {isLoggedIn?
          <Route  path="addata" element={<AddData />} />:
          <Route  path="addata" element={<Login />} />
          }
         
        
      </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default App;
