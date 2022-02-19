import React,{ useEffect, useState } from 'react';
import Itemcard from './Itemcard';
import Data from './Data'
import { useNavigate } from 'react-router-dom'
import Background from '../images/pattern1.png'
import Navbar from '../../files/Navbar';
import { FaShoppingCart } from 'react-icons/fa'



const Menu = ({totalItems, addItem}) => {

    const [menuItems, setMenuItems] = useState()

    useEffect(() => {
        getMenuItems()
        // fetch('http://localhost:4000/items/menu')
        // .then((res) => res.json())
        // .then((resJson) => {
        //     setMenuItems(resJson)
        // })
        // .catch(error => console.error({'Error': error}))
    }, [])

    let getMenuItems = async () => {
        let data = await fetch('http://localhost:4000/items/menu')
        let json = await data.json()
        setMenuItems(json)
    }

    console.log(menuItems);

    const navigate = useNavigate()
    const cartPage = () => navigate('/menu/cart')
    
    // console.warn(Data.productData)
    return (
        <div className=' p-b-80' style={{backgroundImage: `url(${Background})`}}>
            <div className='p-b-100'>
                <Navbar />
            </div>
                <h2 className='h2-menu  text-center'>Main Menu</h2>
                <section className='py-4 container '>
                    <div className='row justify-content-center'>
                        {menuItems? menuItems.map((item) =>{
                            return(
                                <Itemcard 
                                    addItem={addItem}
                                    image={item.image} 
                                    name={item.name} 
                                    description={item.description} 
                                    price={item.price} 
                                    item={item} 
                                    key={item._id} 
                                    />
                            )                         
                        }):null}
                            
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