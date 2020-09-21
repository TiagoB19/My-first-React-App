import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
    
    const url = 'https://5f669bb443662800168e7774.mockapi.io/products/1'
    const [products, setProducts] = useState(null)
    
    useEffect( () => {
        Axios.get(url).then(response => setProducts(response.data))
    }, [url])

    console.log(products)
    return (    
        <div>  
            <h1>Products Page</h1>
        </div>
    );
}

export default Product;