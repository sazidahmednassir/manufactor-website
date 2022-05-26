import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div  class="w-full mx-5 lg:mx-0" >
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded my-5 ">
  <div class="grid grid-flow-col gap-4">
    <Link  to='/blog' class="link link-hover">Blog</Link> 
    <Link to='/review' class="link link-hover">Review</Link> 
    <Link to='/myportfolio' class="link link-hover">My Portfolio</Link> 
    {/* <a class="link link-hover">Press kit</a> */}
  </div> 
  <div className='flex'>
    <div class="grid grid-flow-col gap-4 ">
    
      <a href='https://www.youtube.com/channel/UCIlZ1ynkFZCt4v6FyF8hDDw'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a href='https://www.facebook.com/profile.php?id=100010096441023'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by DeComputerParts</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;