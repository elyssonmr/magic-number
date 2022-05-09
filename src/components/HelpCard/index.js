import React from 'react';

import { Accordion, Card, Button } from 'react-bootstrap';

function HelpCard() {
  return (
    <Accordion>
      <Card className="help-text">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <i className="bi bi-info-circle-fill" />
            Clique aqui para obter ajuda
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Magic Number é a quantidade de papeis de um determinado FII que você
            precisa para que todo mês você possa comprar pelo menos um FII,
            ou seja, o valor recebido de dividendos dos papeis deve ser suficiente
            para comprar pelo menos mais um papel daquele FII.
            <br />
            <br />
            Para achar o Magic Number de um FII, basta preencher o valor atual do FII
            e o valor do último dividendo/provento pago.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default HelpCard;
