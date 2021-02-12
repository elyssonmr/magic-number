import React from 'react';

import { Row, Col } from 'react-bootstrap';

function TableHeader() {
  return (
    <Row>
      <Col xs={1} />
      <Col><p className="text-center">Nome do Fii</p></Col>
      <Col><p className="text-center">Preço</p></Col>
      <Col><p className="text-center">Dividendos / Proventos</p></Col>
      <Col><p className="text-center">Magic Number</p></Col>
    </Row>
  );
}

export default TableHeader;
