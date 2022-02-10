import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

// import { FontAwesomeIcon } from '@fortawesome/fontawesome-common-types'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import './css/main.css'
import './css/util.css'
import check from './images/check-2.jpg'

const Confirmation = ({orderDetails}) => {
    console.log(orderDetails);
  return (
      <Container className='bg-light'>
          <Col className='d-flex flex-column vh-100 overflow-hidden'>
                    {/* <Row  >
                
                    <header className='bg-dark pb-3'>
                    <h1 className='tit2 p-t-10'>Restaurant</h1>  
                    </header>
                    </Row> */}
                    <Row className='t-center'>
                      <div className='p-t-40 p-b-20'>
                      <img src={check} alt='icon' className='check' />
                      </div>        
                    </Row>

                    <Row className='t-center'>
                        <h1 className='tit2'>Hey {orderDetails.fName} {orderDetails.lName}</h1>
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
                                <td>{orderDetails.date}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{orderDetails.time}</td>
                            </tr>
                            <tr>
                                <td>People</td>
                                <td>{orderDetails.people}</td>
                            </tr>
                            <tr>
                                <td>Table</td>
                                <td>{orderDetails.table}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{orderDetails.phone}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{orderDetails.email}</td>
                            </tr>
                            <tr>
                                
                            </tr>
                            </tbody>
                            
                        </Table>
                    </Row>

                    <Row className='t-center p-t-30'>
                        <h2>See menu | Get directions</h2>
                        <div>
                            <p>15240 Manchester Rd</p>
                            <p>Ballwin, MO 63011</p>
                            <p>(636) 207-9464</p>
                        </div>
                        <div>
                            <Button variant='primary'className='m-r-40'>Modify</Button>
                            <Button variant='warning'>Cancel</Button>
                        </div>
                    </Row>
                
                    {/* 
                    <Row >
                        <footer class="py-3 bg-dark mt-auto w-100 fixed-bottom">
                            <p class="m-0 text-center text-white">Copyright Restaurant 2022</p>
                        </footer>  
                    </Row> */}
                            
            
          </Col>
      </Container>
  )
};

export default Confirmation;
