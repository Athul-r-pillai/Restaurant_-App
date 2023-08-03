import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({rv}) {
    console.log(rv);
    const [open, setOpen] = useState(false);
  return (
    <div>
           <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
            {
            rv?.map((item)=>(
                
               <div>
                <p>
                {item.name}</p>
                <p>{item.date}</p>
                <p>{item.rating}</p>
                <p>{item.comments}</p>
                </div>
                
            )) 
        }
        
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Restreview