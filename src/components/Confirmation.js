import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
//CSS
import './css/main.css'
import './css/util.css'
//icons
import  {FaCheckCircle, FaEdit,  } from 'react-icons/fa'
import {GiCancel} from 'react-icons/gi'

const Confirmation = ({setOrders}) => {
    const [showOrder, setShowOrder] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    const goToHomePage = () => navigate('/')
    const goToEditPage = () => navigate('/edit/' + id)

    const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_URL : process.env.REACT_APP_LOCAL;

    useEffect(() => {
        
        fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((resJson) => {
            setShowOrder(resJson)
        })
        .catch(error => console.error({'Error': error}))
    }, [])
    
    // Delete rotue
    let deleteOrder = async (id) => {
        let data = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            body: null,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        goToHomePage()
    }
    
  return (
      <Container className='bg-light'>
            {showOrder?( 
                <Col className='d-flex flex-column  hv-100'>
                    <Row className='t-center'>
                        <div className='p-t-40 p-b-20'>
                            <FaCheckCircle size='7em' color='#5BA508'/>
                        </div>        
                    </Row>
                    <Row className='t-center'>
                        <h1 className='tit2'>Hey {showOrder.firstName} {showOrder.lastName}</h1>
                        <h1 className='txt4'>Thank You For Your Order!</h1>
                        <p>We will be glad to see you in our restaurant.</p>
                    </Row>
                    <Row>
                        <Table className='m-l-20 mx-auto'>
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
                            <Link className='menuAndDirectionLinks' to='/menu'>See menu</Link> | <Link className='menuAndDirectionLinks' to='/about'>Get directions</Link>
                        </h2>
                        <div>
                            <p>19 Stonegate Center</p>
                            <p>Valley Park, MO</p>
                            <p>(737) 828-7268</p>
                        </div>
                        <div className='p-b-50'>
                            <div className='d-inline p-r-40' style={{'cursor': 'pointer'}} onClick={goToEditPage}>
                                <FaEdit variant='primary'  size='3em' color='#DC5722'  /> Modify
                            </div>
                            <div className='d-inline' style={{'cursor': 'pointer'}} onClick={(e) => deleteOrder(showOrder._id)}>
                                <GiCancel variant='warning'  size='3em'color='#DC5722' /> Cancel
                            </div>
                        </div>
                    </Row>
                </Col>
            ): null}
      </Container>
  )
};
export default Confirmation;