import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Blogs from './components/Blogs/Blogs';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import NotFound from "./components/NotFound/NotFound";



function App() {
  return (
    <>
     <Navbar /> 
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="blogs" element={<Blogs />}></Route>
       <Route path="login" element={<Login />}></Route>
       <Route path="register" element={<Register />}></Route>

       <Route path="*" element={<NotFound />}></Route>
     </Routes>
    </>
  );
}

export default App;
