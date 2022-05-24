import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
               <div class="container mt-5">
        <div class="row text-center ">
         
          <div class="column-md-6 mt-5 pt-5">
          <p >
            Error 404
          </p>
          <h1>
            Oops! The page you're looking for isn't here.
          </h1>
          <p >
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to='/' className='text-accent'>
            Back to homepage
          </Link>
          </div>
          <div class="column-md-6 mb-3  w-50 mx-auto">
          <div  className="flex content-center justify-center">
            <img class=" img-fluid"
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
          </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default NotFound;