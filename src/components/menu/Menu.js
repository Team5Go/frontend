import React,{ useEffect, useState } from 'react';
import Itemcard from './Itemcard';
import Data from './Data'
import { useNavigate } from 'react-router-dom'
import Background from '../images/pattern1.png'
import Navbar from '../../files/Navbar';
import { FaShoppingCart } from 'react-icons/fa'



const Menu = ({totalItems, addItem, menuItems}) => {

    const navigate = useNavigate()
    const cartPage = () => navigate('/menu/cart')
    

    return (
        <div className=' p-b-80' style={{backgroundImage: `url(${Background})`}}>
            <div className='p-b-100'>
                <Navbar />
            </div>
                <h2 className='h2-menu  text-center'>Main Menu</h2>
                <section className='py-4 container '>
                    <div className='row justify-content-center'>
                        {menuItems.map((item, index) =>{
                            return(
                                <Itemcard 
                                    addItem={addItem}
                                    image={item.image} 
                                    name={item.name} 
                                    description={item.description} 
                                    price={item.price} 
                                    item={item} 
                                    key={index} 
                                    />
                            )                         
                        })}
                            
                    </div>
                </section>

                {/* Cart Button */}
                <div className='showCard'>
                    <div className='showCardButton' onClick={cartPage}>
                         <FaShoppingCart size={40}/>{totalItems}
                    </div>
                </div>

        </div>
    );
};

export default Menu;