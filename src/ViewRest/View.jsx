import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import Restop from '../Components/RestOp/Restop';
import Restreview from '../Components/RestReview/Restreview';


function View() {
    const [RestDetails,setRestDetails]=useState([]) //To hold particular details

    const {id} = useParams() //{id} was destructured ,before it was pathParameter = useParams() and console.log(pathParameter.id)
    console.log(id);

    //api call for fetch particular restaurant details
    const fetchData = async()=>{
        const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data);
        setRestDetails(data)
    }
    console.log(RestDetails); //restaurants data
    //function call
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
       <Row>
        <Col sm={12} md={3}>
        {/* image */}
          <Image className='rounded-9 border border-2 m-3' src={RestDetails.photograph} fluid/>
        </Col>
        <Col>
        {/* content */}
        <h1 className='text-center m-4'>{RestDetails.name}</h1>
        <div className='container'>
        <MDBListGroup  style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem>Neighborhood: {RestDetails.neighborhood}</MDBListGroupItem>
      <MDBListGroupItem>Cuisine type:{RestDetails.cuisine_type}</MDBListGroupItem>
      <MDBListGroupItem>Address:{RestDetails.address}</MDBListGroupItem>
      <MDBListGroupItem><Restop op={RestDetails.operating_hours}/></MDBListGroupItem>
      <MDBListGroupItem><Restreview rv={RestDetails.reviews}/></MDBListGroupItem>
    </MDBListGroup>
        </div>
        </Col>
       </Row>
    </>
  )
}

export default View