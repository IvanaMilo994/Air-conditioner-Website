import React, { useState } from 'react';
import '../styles/Pages/Products.css';

const dummyProducts = [
  // Add your dummy data here
  { id: 1, name: 'Product 1', price: '$77799.99', imageUrl: "../Images/lg.png" },
  { id: 2, name: 'Milos 2', price: '$799.99', imageUrl: "../Images/samsung.png" },
  { id: 3, name: 'Product 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  { id: 4, name: 'Test 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  { id: 5, name: 'Product 2', price: '$45699.99', imageUrl: "../Images/samsung.png" },
  { id: 6, name: 'Klima 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  { id: 7, name: 'Product 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  { id: 8, name: 'Product 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  { id: 9, name: 'Product 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  { id: 10, name: 'Product 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
  // ... more products
];

const Products = () => {
    const [view, setView] = useState('grid'); // 'list' or 'grid'
    
    return (
        <div>
            <div className='container'>
                <h2>Our Products</h2>
                <div className="view-options">
                    <button onClick={() => setView('list')}>List View</button>
                    <button onClick={() => setView('grid')}>Grid View</button>
                </div>
                <div className={view === 'grid' ? 'products-grid' : 'products-list'}>
                    {dummyProducts.map(product => (
                        <div key={product.id} className="product-item">
                            {'/product-details/${product.id}'} 
                           <img src={require("../Images/samsung.png")} alt={product.name} />
                           <h3>{product.name}</h3>
                           <p>{product.price}</p>
                           
                        </div>   
                
                   ))}
            </div>
        </div>

        </div>
        
    );
};

export default Products;