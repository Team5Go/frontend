import React from 'react';
import FoodImage from '../FoodImage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container';

import '../../components/css/main.css'
import '../../components/css/util.css'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <FoodImage heading='CONTACT TEAM5' />
			<Container className='justify-content-center size26'style={{'width': '450px'}}>
				<Row className='p-t-40'>
        				<Form>
								{/* <!-- Name --> */}
								<span className="txt9">
									First Name
								</span>

								<div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="firstName" placeholder="First Name"  />
								</div>

                                {/* <!-- Last name --> */}
								<span className="txt9">
									Last Name
								</span>

								<div className="wrap-inputlastname size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="lastName" placeholder="Last Name"  />
								</div>

								{/* <!-- Phone --> */}
								<span className="txt9">
									Phone
								</span>

								<div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="phoneNumber" placeholder="Phone"  />
								</div>

								{/* <!-- Email --> */}
								<span className="txt9">
									Email
								</span>

								<div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" placeholder="Email"  />
								</div>
				           
						   
								<div className="wrap-btn-booking flex-c-m m-t-6 m-b-20">
									{/* <!-- Button3 --> */}
									<button type="submit" className="btn3 flex-c-m size13 txt11 trans-0-4">
										Submit
									</button>
								</div>
       			 		</Form>
				</Row>
		</Container>
        <Footer />
    </div>
  )
};

export default Contact;
