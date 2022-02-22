import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../../files/Navbar';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Background from '../images/pattern1.png'


const Cart = ({
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    setFoodOrders
    }) => {

        
    // Redirect to another page      
    const navigate = useNavigate()
    const menuPage = () => navigate('/menu')
    const goToConfirmationPage = (id) => navigate('/menu/cart/' + id)

    
    const[newFoodOrder, setNewFoodOrder] = useState({
        firstName: '',
        lastName: '',
        email: '',
        totalUniqueItems: '',
        totalItems: '',
        cartTotal: '',
        items: ''
    })

    // console.log(newFoodOrder);

    const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_URL : process.env.REACT_APP_LOCAL;


    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch(`${url}/menu/cart`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: newFoodOrder.firstName,
                lastName: newFoodOrder.lastName,
                email: newFoodOrder.email,
                totalUniqueItems: newFoodOrder.totalUniqueItems,
                totalItems: newFoodOrder.totalItems,
                cartTotal: newFoodOrder.cartTotal,
                items: newFoodOrder.items
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let order =await response.json()
        setFoodOrders(order)
        goToConfirmationPage(order.id)
    }


    const handleChange = (event) => {
        setNewFoodOrder({...newFoodOrder,
             [event.target.name]: event.target.value, 
             totalUniqueItems: totalUniqueItems,
             totalItems: totalItems,
             cartTotal: cartTotal,
             items: items })
    }
 

    // Modal window state and buttons
    const [show, setShow] = useState(false);       
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // if cart is empty return return text 'Your Cart is Empty'
    if (isEmpty) {
        return (
            <div>
                <Navbar /> 
                <h1 className='text-center p-t-60' style={{'color': 'black'}}>Your Cart is Empty</h1>
            </div>
    )}

    // Else render choosed items
    return (
        <>
            <div className='p-b-100'>
                <Navbar />
            </div>
                <div className='py-4 container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h5>Cart({totalUniqueItems}) total Items: ({totalItems}) </h5>
                            <table className='table table-light table-hover m-0'>
                                <tbody>
                                    {items.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <img src={item.image} style={{height: '6rem'}} alt={item.name}/>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td>Quantity ({item.quantity})</td>
                                                <td>
                                                    <button
                                                    className='btn btn-info ms-2'
                                                    onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                                    >-</button>
                                                    <button
                                                    className='btn btn-info ms-2'
                                                    onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                                    >+</button>
                                                    <button
                                                    className='btn btn-danger ms-2'
                                                    onClick={() => removeItem(item.id)}
                                                    >Remove Item</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='col-auto ms-auto'>
                            <h2>Total Price: ${cartTotal.toFixed(2)}</h2>          
                        </div>
                        <div className='col-auto'>
                            <button className='btn btn-secondary' onClick={menuPage}>See Menu</button>
                            <button
                            className='btn btn-danger m-2'
                            onClick={() => emptyCart()}
                            >Clear Cart</button>
                            <button  className='btn btn-success m-2' onClick={handleShow} >Order Now</button>
                        </div>
                    </div>
                </div>
                 

       
            
            {/* Menu-order-form modal window */}
            <div>
                <Modal show={show} onHide={handleClose} >
                    <Form onSubmit={handleSubmit} >
                        <Modal.Header closeButton style={{backgroundImage: `url(${Background})`}}>
                            <Modal.Title id="order-food">Place Order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{backgroundImage: `url(${Background})`}}>
                            {/* <!-- First name --> */}
                            <span className="txt9">
                                First Name
                            </span>
                            <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="firstName" placeholder="First Name" value={newFoodOrder.firstName} onChange={handleChange}   required />
                            </div>
                            {/* <!-- Last name --> */}
                            <span className="txt9">
                                Last Name
                            </span>
                            <div className="wrap-inputlastname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={newFoodOrder.lastName} />
                            </div>
                            {/* <!-- Email --> */}
                            <span className="txt9">
                                Email
                            </span>
                            <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" placeholder="Email" onChange={handleChange} value={newFoodOrder.email} required />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{backgroundImage: `url(${Background})`}}>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <button type="submit" className="btn3 flex-c-m size13 txt11 trans-0-4">
                                            Submit
                            </button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            
            </div>

        </>
    );
};
export default Cart;
