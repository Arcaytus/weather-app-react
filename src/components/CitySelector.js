import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');
  return (
   <>
     <Row>
       <Col>
       <h1> Search your city</h1>
       </Col>
     </Row> 
     
      
     <Row>
      <Col xs={4} className="text-center">
        <FormControl
         placeholder="Enter city"
         // update city value with the user's input
         onChange={(event) => setCity(event.target.value)}
         // value will be the currently selected city
         value={city}
         /> 
      </Col>
     </Row>

     <Row>
       <Col>
       <Button onClick={() => onSearch(city)}>Check Weather</Button>
       </Col>
     </Row>
   </>
  );
};

export default CitySelector;


