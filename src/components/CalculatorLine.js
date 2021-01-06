import React, {useState, useEffect} from 'react'

import {Row, Col, InputGroup, FormControl} from 'react-bootstrap'

function createHandleChange(setFunction) {
    return e => {
        setFunction(e.target.value)
    }
}

function CalculatorLine() {
    let [name, setName] = useState('')
    let [price, setPrice] = useState('')
    let [dividends, setDividends] = useState('')
    let [magicNumber, setMagicNumber] = useState(0)
    useEffect(
        () => {
            if (price > 0 && dividends > 0) {
                setMagicNumber(Math.ceil(price / dividends))
            } else {
                setMagicNumber('')
            }
        },
        [name, price, dividends]
    )
    return (
        <Row>
            <Col>
                <FormControl
                    placeholder="Nome do Fii"
                    aria-label="name"
                    onChange={createHandleChange(setName)}
                />
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Preço"
                        aria-label="price"
                        type='number'
                        min='0'
                        onChange={createHandleChange(setPrice)}
                    />
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Dividendos / Proventos"
                        aria-label="price"
                        type='number'
                        min='0'
                        onChange={createHandleChange(setDividends)}
                    />
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Magic Number"
                        aria-label="magic_number"
                        readOnly={true}
                        value={magicNumber}
                    />
                </InputGroup>
            </Col>
        </Row>
    )
}

export default CalculatorLine
