import React, { useState } from 'react'
import '../App.css'

function AddProduct() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');

    const addProduct = async (e) => {

        e.preventDefault();
        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <form onSubmit={addProduct}>
            <input type="text" placeholder='Enter Product Name' className='inputBox' onChange={(e)=>setName(e.target.value)} value={name} required />

            <input type="text" placeholder='Enter Product Price' className='inputBox' onChange={(e)=>setPrice(e.target.value)} value={price} required />

            <input type="text" placeholder='Enter Product Category' className='inputBox' onChange={(e)=>setCategory(e.target.value)} value={category} required />

            <input type="text" placeholder='Enter Product Company' className='inputBox' onChange={(e)=>setCompany(e.target.value)} value={company} required />

            <button type='submit' className='signButton'>Add Product</button>
            
        </form>
    </div>
  )
}

export default AddProduct