import React from 'react';
import Itemcard from './Itemcard';
import Data from './Data'
import Navbar from '../../files/Navbar';
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate()
    const cartPage = () => navigate('/menu/cart')

    console.warn(Data.productData)
    return (
        <div>
            <Navbar />
           <h2 className='text-center mt-3 p-t-100'>All Items</h2>
           <section className='py-4 container'>
               <div className='row justify-content-center '>
                {Data.productData.map((item, index) =>{
                    return(
                        <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index} 
                            />
                    )

                    
                })}
                       
               </div>
           </section>
                     <div className='t-center p-b-50'>
                         <button className='btn btn-danger mx-auto btn-lg' onClick={cartPage}>Cart</button>
                    </div>
        </div>
    );
};

export default Menu;