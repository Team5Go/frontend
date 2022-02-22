import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../files/Navbar';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Background from '../images/pattern1.png'


const EditFoodOrder = ({
    updateItemQuantity,
    removeItem,
    emptyCart,
    setFoodOrders
}) => {

    const [editFoodOrder, seteditFoodOrder] = useState()

    const {id} = useParams()
    // Redirect to another page      
    const navigate = useNavigate()
    const menuPage = () => navigate('/menu')
    const goToConfirmationPage = (id) => navigate('/menu/cart/'+id)

    useEffect(() => {
        fetch('http://localhost:4000/menu/cart/' + id)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson);
            seteditFoodOrder(resJson)
        })
        .catch(error => console.error({'Error': error}))
    }, [])
      


    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch('http://localhost:4000/menu/cart/edit', {
            method: 'PUT',
            body: JSON.stringify({
                firstName: editFoodOrder.firstName,
                lastName: editFoodOrder.lastName,
                email: editFoodOrder.email,
                totalUniqueItems: editFoodOrder.totalUniqueItems,
                totalItems: editFoodOrder.totalItems,
                cartTotal: editFoodOrder.cartTotal,
                items: editFoodOrder.items
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
        seteditFoodOrder({...editFoodOrder,
             [event.target.name]: event.target.value
})
    }
 

    // Modal window state and buttons
    const [show, setShow] = useState(false);       
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <div className='p-b-100'>
                        <Navbar />
             </div>
             
                <div>
                    {editFoodOrder? (
                        <div className='py-4 container'>
                            <div className='row justify-content-center'>
                                <div className='col-12'>
                                    <h5>Cart({editFoodOrder.totalUniqueItems}) total Items: ({editFoodOrder.totalItems}) </h5>
                                    <table className='table table-light table-hover m-0'>
                                        <tbody>
                                            {editFoodOrder.items.map((item) => {
                                                console.log(item);
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
                                                            onClick={(item) => updateItemQuantity(item.id, item.quantity -1)}
                                                            >-</button>
                                                            <button
                                                            className='btn btn-info ms-2'
                                                            onClick={(item) => updateItemQuantity(item.id, item.quantity +1)}
                                                            >+</button>
                                                            <button
                                                            className='btn btn-danger ms-2'
                                                            onClick={(item) => removeItem(item.id)}
                                                            >Remove Item</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })} 
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div className='col-auto ms-auto'>
                                    <h2>Total Price: ${editFoodOrder.cartTotal.toFixed(2)}</h2>          
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
                                    <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="firstName" placeholder="First Name" value={editFoodOrder.firstName} onChange={handleChange}   required />
                                </div>
                                {/* <!-- Last name --> */}
                                <span className="txt9">
                                    Last Name
                                </span>
                                <div className="wrap-inputlastname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                    <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={editFoodOrder.lastName} />
                                </div>
                                {/* <!-- Email --> */}
                                <span className="txt9">
                                    Email
                                </span>
                                <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                    <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" placeholder="Email" onChange={handleChange} value={editFoodOrder.email} required />
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

                        
                            
                            ): null}   
                     
            </div>
                        
          
        
        </>
    );
};

export default EditFoodOrder;