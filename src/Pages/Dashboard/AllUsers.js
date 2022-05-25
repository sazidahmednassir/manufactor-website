import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const {data: users, isLoading, refetch}=useQuery('users',  ()=>fetch('http://localhost:5000/user' ,{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
             <h2 className="text-2xl">All Users: {users?.length}</h2>
             <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Remove User</th>
             
            </tr>
          </thead>
          <tbody>
          {
                           users?.map((user, index)=><UserRow
                           index={index}
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;