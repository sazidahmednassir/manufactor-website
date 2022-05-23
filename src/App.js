import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import PurchasePage from './Pages/Products/PurchasePage';
import Review from './Pages/Review/Review';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
  <Navbar></Navbar>
  <ToastContainer/>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purchasepage" element={  <RequireAuth><PurchasePage/></RequireAuth> } />
      </Routes>
    </div>
  );
}

export default App;
