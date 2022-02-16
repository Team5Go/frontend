import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import './css/main.css'
import './css/util.css'
import check from './images/check-2.jpg'

//icons
import  {FaCheckCircle, FaEdit,  } from 'react-icons/fa'
import {GiCancel} from 'react-icons/gi'

const Confirmation = ({setOrders}) => {
    const [showOrder, setShowOrder] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    const goToReservationPage = () => navigate('/reservation')
    const goToEditPage = () => navigate('/edit/' + id)

    useEffect(() => {
        fetch('http://localhost:4000/'+id)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson);
            setShowOrder(resJson)
        })
        .catch(error => console.error({'Error': error}))
    }, [])

    // Delete rotue
    let deleteOrder = async (id) => {
        let data = await fetch('http://localhost:4000/' + id, {
            method: 'DELETE',
            body: null,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // let allOrders = await data.json()
        
        goToReservationPage()
        // if(allOrders) {
            
        //     setOrders(allOrders)
            
        // }
        
    }

    // Redirect to edit page


  return (
      <Container className='bg-light'>
        {showOrder?( <Col className='d-flex flex-column vh-100 overflow-hidden'>
                    {/* <Row  >
                
                    <header className='bg-dark pb-3'>
                    <h1 className='tit2 p-t-10'>Restaurant</h1>  
                    </header>
                    </Row> */}
                    <Row className='t-center'>
                      <div className='p-t-40 p-b-20'>
                      {/* <img src={check} alt='icon' className='check' /> */}
                      <FaCheckCircle size='7em' color='#5ba508'/>
                      </div>        
                    </Row>

                    <Row className='t-center'>
                        <h1 className='tit2'>Hey {showOrder.firstName} {showOrder.lastName}</h1>
                        <h1 className='txt4'>Thank You For Your Order!</h1>
                        <p>We will be glad to see you in our restaurant.</p>
                    </Row>

                    <Row>
                    
                        <Table className='m-l-20'>
                            <thead>
                                <tr>
                                    <th>Order Details</th>
                                </tr>
                            </thead>

                            <tbody>
                                
                            <tr>
                                <td>Date</td>
                                <td>{new Date (showOrder.date).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{showOrder.time}</td>
                            </tr>
                            <tr>
                                <td>People</td>
                                <td>{showOrder.partySize}</td>
                            </tr>
                            <tr>
                                <td>Table</td>
                                <td>{showOrder.table}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{showOrder.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{showOrder.email}</td>
                            </tr>
                            <tr>
                                
                            </tr>
                            </tbody>
                            
                        </Table>
                    </Row>

                    <Row className='t-center p-t-30'>
                        <h2>
                            <Link className='menuAndDirectionLinks' to='/'>See menu</Link> | <Link className='menuAndDirectionLinks' to='https://www.google.com/maps/place/15240+Manchester+Rd,+Ballwin,+MO+63011/@38.592305,-90.5584187,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8d448e3f93b41:0x8d1ba94fcfa1909e!8m2!3d38.592305!4d-90.55623'>Get directions</Link> 
                        </h2>

                        <div>
                            <p>15240 Manchester Rd</p>
                            <p>Ballwin, MO 63011</p>
                            <p>(636) 207-9464</p>
                        </div>
                        <div>
                            <div className='d-inline p-r-40' style={{'cursor': 'pointer'}} onClick={goToEditPage}>
                            <FaEdit variant='primary'  size='3em' color='#dc5722'  /> Modify
                            </div>
                            <div className='d-inline' style={{'cursor': 'pointer'}} onClick={(e) => deleteOrder(showOrder._id)}>
                            <GiCancel variant='warning'  size='3em'color='#dc5722' /> Cancel
                            </div>
                        </div>
                    </Row>
                
                    {/* 
                    <Row >
                        <footer class="py-3 bg-dark mt-auto w-100 fixed-bottom">
                            <p class="m-0 text-center text-white">Copyright Restaurant 2022</p>
                        </footer>  
                    </Row> */}
                            
            
          </Col>
          ): null}
      </Container>
  )
};

export default Confirmation;
