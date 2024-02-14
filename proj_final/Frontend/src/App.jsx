/* eslint-disable no-irregular-whitespace */
import './App.css'
import { Home } from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ContactPage from './Components/Contact';
import Gallery from './Components/Locations';
import Courses from './Components/Bookpage';
import { Home1 } from './Components/Home1';
import Loginad from './Components/Adminlogin';
import { Homead } from './Components/Adminhome';
import ReviewPage from './Components/Reviews';
import Viewenquiry from './Components/Bookad';
import FormComponent from './Components/Booknow';

function App() {
  
  return (
    
     <Router>
     
       <Routes>
         <Route path='' element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp/>} />
         <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/locations' element={<Gallery/>}/>
         <Route path='/book' element={<Courses/>}/>
         <Route path='/home1' element={<Home1/>}/>
         <Route path='/loginad' element={<Loginad/>}/>
         <Route path='/adminhome' element={<Homead/>}/>
         <Route path='/review' element={<ReviewPage/>}/>
         <Route path='/bookad' element={<Viewenquiry/>}/>
         <Route path='/booknow' element={<FormComponent/>}/>
         </Routes>
     
   </Router>
   

  )
}

export default App