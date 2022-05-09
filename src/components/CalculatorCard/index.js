import React, { useState } from 'react';

import './CalculatorCard.css';
import {
  Card, Col, Container, ListGroup, Row,
} from 'react-bootstrap';

import HelpCard from '../HelpCard';
import TableHeader from '../TableHeader';
import CalculatorRow from '../CalculatorRow';
import Footer from '../Footer';

function CalculatorCard() {
  const [lines, setLines] = useState([{
    id: Math.random(),
  }]);

  const addItem = () => {
    setLines([...lines, { id: Math.random() }]);
  };

  const removeItem = (id) => {
    if (lines.length > 1) {
      setLines(lines.filter((item) => item.id !== id));
    }
  };

  return (
    <Card>
      <Card.Header>Descubra o Magic Number dos seus FIIs</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={12}>
              <HelpCard />
            </Col>
          </Row>
          <TableHeader />
          <Row>
            <ListGroup variant="flush">
              {lines.map(({ id }) => (
                <CalculatorRow
                  key={id}
                  id={id}
                  lines={lines}
                  removeItem={removeItem}
                />
              ))}
            </ListGroup>
          </Row>
        </Container>
      </Card.Body>
      <Footer addItem={addItem} />
    </Card>
  );
}

export default CalculatorCard;
