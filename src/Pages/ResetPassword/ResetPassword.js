import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';


const ResetPassword = () => {

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth);
    const emailRef= useRef(' ');

    const resetPassword= async (e)=>{
        e.preventDefault();
        const email= emailRef.current.value;
        console.log(email)
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }

    return (
        <div>
            <div className='class="w-full max-w-xs '>
        <form onSubmit={resetPassword} >
       
     <div class=" w-full">
       <label for="exampleInputEmail1" class=" my-3 lg:mx-8 my-14 text-2xl text-primary text-center px-0 sm:w-full ">Enter Email address</label>
       <input  type="email" name="email" class="my-8 mx-8 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
       
       
     </div>
    
    
     <button type="submit" class="btn btn-primary mx-6">Reset</button>
   </form>
   
   <div className='pt-2'>
  
   
     
   </div>
   
  
           </div>
        </div>
    );
};

export default ResetPassword;