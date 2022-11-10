import React from 'react';
import toast from 'react-hot-toast';

const AddNewService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const description = form.comment.value;
        const img = form.imgURL.value;
        const ratings = parseInt(form.ratings.value);
        const price = parseInt(form.price.value);

        const newService = {
            name: productName,
            image: img,
            price,
            details: description,
            ratings
        }

        fetch('https://pepperoni-server.vercel.app/add-services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product added successfully");
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='grid md:grid-cols-1 justify-items-center my-20 '>
            <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center mt-6 text-primary">Add Service</h1>
                <form onSubmit={handleAddService} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Product Name</span>
                        </label>
                        <input type="text" name='name' placeholder="product name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Product Image URL</span>
                        </label>
                        <input type="text" name='imgURL' placeholder="https://" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Product Description</span>
                        </label>
                        <textarea name='comment' className="textarea textarea-bordered my-5 h-40 w-4/5 " placeholder="Write a description"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Ratings</span>
                        </label>
                        <input type="text" name='ratings' placeholder="ratings" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewService;