import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile ">
      <input id="sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
      <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
        <Outlet></Outlet>
        
      </div>
      <div class="drawer-side">
        <label for="sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          { !admin && <>
            <li><Link to="/dashboard/myorder">My Orders</Link></li>
          <li><Link to="/dashboard/addreview">Add Review</Link></li>
          </>

          }
          
          <li><Link to="/dashboard">My Profile</Link></li>
         
         {admin &&  <>  <li><Link to="/dashboard/users">Make Admin</Link></li>
        <li><Link to="/dashboard/manageorder">Manage All Orders</Link></li>
        <li><Link to="/dashboard/addproduct">Add A Product</Link></li> 
        <li><Link to="/dashboard/manageproduct">Manage Products</Link></li></>}
         
         


          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
