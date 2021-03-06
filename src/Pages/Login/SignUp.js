import React from 'react';
import {
  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import useToken from '../../hooks/useToken';
import google from "../../Images/social/google.png";
import Loading from "../Shared/Loading";

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token]  = useToken(user || gUser);
    const {
      register,
      formState: { errors },
      handleSubmit, reset
    } = useForm();

    const navigate = useNavigate();
  
    let signInError;
  
    if (loading || gLoading || updating) {
      return <Loading></Loading>;
    }
  
    if(error || gError || updateError){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }

  if(token){
    navigate('/');
  }
  
  
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        reset()
        navigate('/');
    };
  
  
  
    return (
        <div className="flex h-screen justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                class="btn btn-outline w-full max-w-xs"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p><small>Already have an account? <Link className='text-primary px-2' to="/login">Please login</Link></small></p>
          
            <div class="divider">OR</div>
            <button class="btn btn-outline" onClick={() => signInWithGoogle()}>
              <img style={{ width: "30px" }} src={google} alt="" />
              <span className="px-2">Google Sign In</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;