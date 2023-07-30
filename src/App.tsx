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
  return (
    <div className="App">
     <Nav/>
    
     <BrowserRouter>
      <Routes>
   
       {/* <Route path="addAdmin" element={<Signup/>}/> */}
          <Route path='admin' element={<Login/>}/>
          <Route path='/' element={<Combine/>}/>
          <Route  path="addata" element={<AddData />} />:

         
        
      </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default App;
