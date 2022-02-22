import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormSelect from 'react-bootstrap/FormSelect'
import bookingImage from './images/planOfRestaurant.jpg'

import './css/main.css'
import './css/util.css'

const EditOrder = ({setOrders}) => {

    const [editOrder, setEditedOrder] = useState({
        date: '',
        time: '',
        partySize: '',
        table: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    })

    const {id} = useParams()

	const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_URL : process.env.REACT_APP_LOCAL;

    useEffect(() => {
        fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((resJson) => {
            setEditedOrder(resJson)
        })
        .catch(error => console.error({'Error': error}))
    }, [])


    const navigate = useNavigate()
    const goToConfirmationPage = () => navigate('/reservation/'+id)
    
    const handleSubmit = async (e) => {
        // console.log(e);

        e.preventDefault()
        let response = await fetch(`${url}/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                date: editOrder.date,
                time: editOrder.time,
                partySize: editOrder.partySize,
                table: editOrder.table,
                firstName: editOrder.firstName,
                lastName: editOrder.lastName,
                phoneNumber: editOrder.phoneNumber,
                email: editOrder.email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let editedOrder =await response.json()
        setOrders(editedOrder)
        goToConfirmationPage()
        

    }

        const handleChange = (event) => {
        // console.log(event);
        setEditedOrder({...editOrder,[event.target.name]:event.target.value})
    }
    

  return (
   <Container>
       <Row>
           <Col className='col-lg-6 pb-30'>
                <div className="t-center">
                    <span className="tit2 text-center">
                        Reservation
                    </span>

                    <h3 className="tit3 text-center m-b-35 mt-2">
                        Book table
                    </h3>
                </div>

                <Form className='wrap-form-booking' onSubmit={handleSubmit} >
                    <Row>
                        <Col className='col-md-6'>
                        {/* <!-- Date --> */}
								<span className="txt9">
									Date
								</span>
                                <div className="flex-wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="my-calendar bo-rad-10 sizefull txt10 p-l-20"  type="date"  name="date" onChange={handleChange} value={editOrder.date} required />

								</div>

                                {/* <!-- Time --> */}
								<span className="txt9">
									Time
								</span>

									{/* <!-- Select2 --> */}
                                    <div className="flex-wrap-inputtime size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<FormSelect className="input sizefull txt10 p-l-20"  name="time" value={editOrder.time} onChange={handleChange} required >
                                        <option value='9:00'>9:00 </option>
										<option value='9:30'>9:30 </option>
										<option value='10:00'>10:00</option>
										<option value='10:30'>10:30</option>
										<option value='11:00'>11:00</option>
										<option value='11:30'>11:30</option>
										<option value='12:00'>12:00</option>
										<option value='12:30'>12:30</option>
										<option value='13:00'>13:00</option>
										<option value='13:30'>13:30</option>
										<option value='14:00'>14:00</option>
										<option value='14:30'>14:30</option>
										<option value='15:00'>15:00</option>
										<option value='15:30'>15:30</option>
										<option value='16:00'>16:00</option>
										<option value='16:30'>16:30</option>
										<option value='17:00'>17:00</option>
										<option value='17:30'>17:30</option>
										<option value='18:00'>18:00</option>
									</FormSelect>
                                    </div>

                                   {/* <!-- People --> */}
								<span className="txt9">
									People
								</span>

								<div className="wrap-inputpeople size12 bo2 bo-rad-10 m-t-3 m-b-23">
									{/* <!-- Select2 --> */}
									<FormSelect className="input sizefull txt10 p-l-20" name="partySize" value={editOrder.partySize} onChange={handleChange} required >
                                        <option value='1 person'>1 person</option>
                                        <option value='2 people'>2 people</option>
										<option value='3 people'>3 people</option>
										<option value='4 people'>4 people</option>
										<option value='5 people'>5 people</option>
										<option value='6 people'>6 people</option>
										<option value='7 people'>7 people</option>
										<option value='8 people'>8 people</option>
										<option value='9 people'>9 people</option>
										<option value='10 people'>10 people</option>
										<option value='11 people'>11 people</option>
										<option value='12 people'>12 people</option>
									</FormSelect>
								</div>   

                                
                                   {/* <!-- Table --> */}
								<span className="txt9">
									Table
								</span>

								<div className="wrap-inputtable size12 bo2 bo-rad-10 m-t-3 m-b-23">
									{/* <!-- Select2 --> */}
									<FormSelect className="input sizefull txt10 p-l-20" name="table" placeholder='Choose Your Table' value={editOrder.table} onChange={handleChange}>
                                        <option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
                                        <option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
									</FormSelect>
								</div>                               
                        </Col>
                        <Col className="col-md-6">
								{/* <!-- Name --> */}
								<span className="txt9">
									First Name
								</span>

								<div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="firstName"  value={editOrder.firstName} onChange={handleChange} required />
								</div>

                                {/* <!-- Last name --> */}
								<span className="txt9">
									Last Name
								</span>

								<div className="wrap-inputlastname size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="lastName"  onChange={handleChange} value={editOrder.lastName} />
								</div>

								{/* <!-- Phone --> */}
								<span className="txt9">
									Phone
								</span>

								<div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="phoneNumber"  onChange={handleChange} value={editOrder.phoneNumber} required />
								</div>

								{/* <!-- Email --> */}
								<span className="txt9">
									Email
								</span>

								<div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" onChange={handleChange} value={editOrder.email} required />
								</div>
							</Col>
                    </Row>

                    <div className="wrap-btn-booking flex-c-m m-t-6">
							{/* <!-- Button3 --> */}
							<button type="submit" className="btn3 flex-c-m size13 txt11 trans-0-4">
								Book Table
							</button>
						</div>
                </Form>
           </Col>

           <div className="col-lg-6 p-b-30 p-t-18">
           <h3 className="tit10 t-center m-b-35 m-t-2">
                         Seating Plan
                    </h3>
					<div className="bo-rad-10 p-t-50 hov-img-zoom m-l-r-auto">
						<img src={bookingImage} alt="IMG-OUR" />
					</div>
				</div>
       </Row> 
    
  
       
   </Container>

  );
};


export default EditOrder