import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const { signIn, signInGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success();
                navigate(from, { replace: true });
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
                <h1 className="text-5xl font-bold text-center mt-6">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
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
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <div className='text-center'>
                    <p className="text-xl">Or sign in with google</p>
                    <button onClick={handleSignInWithGoogle}>
                        <FaGoogle className='text-5xl p-2 mt-2 bg-neutral-200 rounded-3xl border-4'></FaGoogle>
                    </button>
                </div>
                <p className='text-center my-5'>New in Pepperoni? <Link className='text-orange-600 font-semibold' to='/register'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;