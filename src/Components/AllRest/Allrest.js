import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from '../RestCard/Restcard';
function Allrest() {
    //allitems is state to hold the all array items
    const [allItems,setallItems]=useState([]) //to store the response.data

    const fetchData = async()=>{
        const response = await axios.get('http://localhost:3001/restaurants')
        // console.log(response.data);
        setallItems(response.data)
    }
    console.log(allItems);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
      <Row>
        {
            allItems.map((item)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <Restcard restaurants={item}/>
                </Col>
            )) 
        }
      </Row>
    </>
  )
}

export default Allrest