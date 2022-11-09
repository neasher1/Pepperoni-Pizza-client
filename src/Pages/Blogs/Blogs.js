import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-2 gap-0'>
            <div className="card m-20 border-8">
                <div className="card-body">
                    <h2 className="card-title text-primary">Difference between SQL and NoSQL</h2>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div className="card m-20 border-8">
                <div className="card-body">
                    <h2 className="card-title text-primary">What is JWT, and how does it work?</h2>
                    <p>JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>
            <div className="card m-20 border-8">
                <div className="card-body">
                    <h2 className="card-title text-primary">What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div className="card m-20 border-8">
                <div className="card-body">
                    <h2 className="card-title text-primary">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them..</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;