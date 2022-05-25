import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound.js/NotFound';
import AllProducts from './Pages/Products/AllProducts';
import PurchasePage from './Pages/Products/PurchasePage';
import Review from './Pages/Review/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-8' >
  <Navbar></Navbar>
  <ToastContainer/>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/allproduct" element={< AllProducts/>} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:productid" element={  <RequireAuth><PurchasePage/></RequireAuth> } />
        <Route path="/dashboard" element={  <RequireAuth><Dashboard/></RequireAuth> } >
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path="addreview" element={<AddReview></AddReview>}></Route>
        <Route path="myorder" element={<MyOrders></MyOrders>}></Route>
        <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        <Route path="manageorder" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        <Route path="manageproduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
