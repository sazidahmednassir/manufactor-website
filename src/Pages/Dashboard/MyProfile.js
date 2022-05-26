import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    // console.log(user)
    console.log(user.email)
    const email=user.email;

    const [profile, setProfile]=useState({})
    // console.log(profile)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{setProfile(data)
        console.log(data)})
    }, [profile])

     
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl my-3">
  <figure><div class="avatar">
  <div class="w-32 rounded">
  <img src={profile?.img} alt={profile?.name}/>
  </div>
</div>
      </figure>
  <div class="card-body c">
    <h2 class="card-title">Name: {profile?.name}</h2>
    <h3 class="card-title">Education: {profile?.ed}</h3>
    <h4 class="card-title">Facebook Link: {profile?.fb}</h4>
    <h4  class="card-title">Email: {profile?.email}</h4>
    <p>Address: {profile?.add}</p>
    <div class="card-actions justify-start">
    <Link to='/dashboard/updateprofile' class="btn btn-primary">Update</Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default MyProfile;