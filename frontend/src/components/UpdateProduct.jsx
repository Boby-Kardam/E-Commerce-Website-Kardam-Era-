import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'

function UpdateProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        
        console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5000/products/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/');
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <input type="text" placeholder='Enter Product Name' className='inputBox' onChange={(e) => setName(e.target.value)} value={name} required />

                <input type="text" placeholder='Enter Product Price' className='inputBox' onChange={(e) => setPrice(e.target.value)} value={price} required />

                <input type="text" placeholder='Enter Product Category' className='inputBox' onChange={(e) => setCategory(e.target.value)} value={category} required />

                <input type="text" placeholder='Enter Product Company' className='inputBox' onChange={(e) => setCompany(e.target.value)} value={company} required />

                <button type='submit' className='signButton'>Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct