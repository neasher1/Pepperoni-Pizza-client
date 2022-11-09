import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();

const Register = () => {

    const { createUser, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success();
                navigate('/');
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    const handleSignInWithGoogle = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/');
                toast.success();
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='grid md:grid-cols-1 justify-items-center my-20 '>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center mt-6">Register</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>
                </form>
                <div className='text-center'>
                    <p className="text-xl">Or sign up with google</p>
                    <button onClick={handleSignInWithGoogle}>
                        <FaGoogle className='text-5xl p-2 mt-2 bg-neutral-200 rounded-3xl border-4'></FaGoogle>
                    </button>
                </div>
                <p className='text-center my-5'>Already have an account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;