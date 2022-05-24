import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Blogs from './components/Blogs/Blogs';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Purchase from "./components/Purchase/Purchase";
import RequireAuth from "./components/Authentication/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import AddReview from "./components/Dashboard/Dashboard/AddReview";
import MyOrder from "./components/Dashboard/Dashboard/MyOrder";
import Users from "./components/Dashboard/Dashboard/Users";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/purchase/:productId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="myOrders" element={<MyOrder />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>



        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="myPortfolio" element={<MyPortfolio />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
