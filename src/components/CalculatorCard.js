import React, { useState } from 'react'

import './CalculatorCard.css'

import {Accordion, Button, Card, Col, Container, ListGroup, Row} from 'react-bootstrap'

import CalculatorLine from './CalculatorLine'


function HelpCard() {
  return (
    <Accordion>
      <Card className="help-text">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <i className="bi bi-info-circle-fill"></i> Clique aqui para obter ajuda
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Magic Number é a quantidade de papeis de um determinado FII que você
            precisa para que todo mês você possa comprar pelo menos um FII,
            ou seja, o valor recebido de dividendos dos papeis deve ser suficiente
            para comprar pelo menos mais um papel daquele FII.
            <br/>
            <br/>
            Para achar o Magic Number de um FII, basta preencher o valor atual do FII
            e o valor do último dividendo/provento pago.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

function TableHeader() {
  return (
    <Row>
      <Col xs={1}></Col>
      <Col><p className='text-center'>Nome do Fii</p></Col>
      <Col><p className='text-center'>Preço</p></Col>
      <Col><p className='text-center'>Dividendos / Proventos</p></Col>
      <Col><p className='text-center'>Magic Number</p></Col>
    </Row>
  )
}

function CalculatorRow({id, lines, removeItem}) {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={1}>
          <Button
            variant='danger'
            onClick={() => removeItem(id)}
            className='btn-block'
            disabled={lines.length === 1}
          >
            <i className="bi bi-x-circle-fill"></i>
          </Button>
        </Col>
        <Col xs={11}>
          <CalculatorLine />
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

function Footer({addItem}) {
  return (
    <Card.Footer className='clearfix'>
      <div className='float-right'>
        <Button onClick={addItem}>
          <i className="bi bi-plus-circle-fill"></i> Adicionar Linha
        </Button>
        {' '}
        <Button disabled>
          <i className="bi bi-cloud-arrow-up-fill"></i> Salvar
        </Button>
      </div>
    </Card.Footer>
  )
}


function CalculatorCard() {
  const [lines, setLines] = useState([{
    id: Math.random()
  }])

  const addItem = (e) => {
    setLines([...lines, {id: Math.random()}])
  }

  const removeItem = (id) => {
    if (lines.length > 1) {
      setLines(lines.filter(item => item.id !== id))
    }
  }

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
            {lines.map((item) => {
              return (
                <CalculatorRow
                  key={item.id}
                  id={item.id}
                  lines={lines}
                  removeItem={removeItem}
                />
              )
            })}
          </ListGroup>
        </Row>
      </Container>
    </Card.Body>
    <Footer addItem={addItem}/>
  </Card>
  )
}

export default CalculatorCard
