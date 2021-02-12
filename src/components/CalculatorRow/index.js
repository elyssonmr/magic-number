import React from 'react';

import {
  ListGroup, Row, Col, Button,
} from 'react-bootstrap';

import CalculatorLine from '../CalculatorLine';

function CalculatorRow({ id, lines, removeItem }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={1}>
          <Button
            variant="danger"
            onClick={() => removeItem(id)}
            className="btn-block"
            disabled={lines.length === 1}
          >
            <i className="bi bi-x-circle-fill" />
          </Button>
        </Col>
        <Col xs={11}>
          <CalculatorLine />
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CalculatorRow;
