import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import '../css/main.css'
import '../css/util.css'
//icons
import  {FaCheckCircle, FaEdit,  } from 'react-icons/fa'
import {GiCancel} from 'react-icons/gi'

const Receipt = () => {
    
    const[showReceipt, setShowReceipt] = useState()
    const {id} = useParams()

    const navigate = useNavigate()
    const goToMenuPage = () => navigate('/menu')
    const goToEditPage = () => navigate('/menu/cart/edit/' + id)


    const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_URL : process.env.REACT_APP_LOCAL;

    let getOrderDetails = async () => {
        let data = await fetch(`${url}/menu/cart/` + id)
        let json = await data.json()
        setShowReceipt(json)
    }

    useEffect(() => {
        getOrderDetails()
    }, [])

    // Delete rotue
    let deleteOrder = async (id) => {
        let data = await fetch(`${url}/menu/cart/` + id, {
            method: 'DELETE',
            body: null,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        goToMenuPage()
        // console.log('item was deleted');
    }
    
    console.log(showReceipt);
    
  return (
      <Container className='bg-light' style={{'maxWidth': '800px'}}>
          {showReceipt?(
        <Col className='d-flex flex-column  hv-100'>
                    <Row className='t-center'>
                      <div className='p-t-40 p-b-20'>
                      <FaCheckCircle size='7em' color='#5BA508'/>
                      </div>        
                    </Row>
                    <Row className='t-center'>
                        <h1 className='tit2'>Hey {showReceipt.firstName} {showReceipt.lastName}</h1>
                        <h1 className='txt4'>Thank You For Your Order!</h1>
                    </Row>
                    <Row>
                        <div className='pb-3 pt-4'>
                            <Table className='userInfo d-inline' size='sm'>
                                <tbody >
                                <tr>
                                        <th>Order Details:</th>
                                        
                                    </tr>

                                    <tr>
                                        <td>Full Name:</td>
                                        <td>{showReceipt.firstName} {showReceipt.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Date:</td>
                                        <td>{new Date().toLocaleDateString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{showReceipt.email} </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div>
                        <Table className='m-l-20 mx-auto'>
                            <thead style={{'backgroundColor': '#e9ecef'}}>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showReceipt.items.map((item, index) => (
                                    <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>  
                                    <td>${item.itemTotal}</td>
                                    </tr>
                                ))}

                            </tbody>

                        </Table>
                        </div>

                        <div className='t-right p-r-40 p-t-30'>
                            <Table className='totalPrice d-inline' size='sm'>
                                <tbody >
                                    <tr className='pt-3'>
                                        <td></td>
                                        <td>Subtotal:</td>
                                        <td>${showReceipt.cartTotal.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Total:</td>
                                        <td>${showReceipt.cartTotal.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                    <Row className='t-center p-t-30'>
                        <h2>
                            <Link className='menuAndDirectionLinks' to='/menu'>See menu</Link> | <Link className='menuAndDirectionLinks' to='/about'>Get directions</Link>
                        </h2>
                        <div>
                            <p>19 Stonegate Center</p>
                            <p>Valley Park, MO</p>
                            <p>(737) 828-7268</p>
                        </div>
                        <div className='p-b-50'>
                            <div className='d-inline p-r-40' style={{'cursor': 'pointer'}} >
                            <FaEdit variant='primary'  size='3em' color='#DC5722' onClick={goToEditPage} /> Modify
                            </div>
                            <div className='d-inline' style={{'cursor': 'pointer'}} >
                            <GiCancel variant='warning'  size='3em'color='#DC5722' onClick={(e) => deleteOrder(showReceipt.id)} /> Cancel
                            </div>
                        </div>
                    </Row>
          </Col>
        ): null}
        </Container>
  )
};
export default Receipt;