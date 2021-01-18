import React, {useEffect, useState} from 'react'

import {Row, Col, InputGroup, FormControl} from 'react-bootstrap'


function ReadOnlyField({placeholder, label, value, readOnly}) {
    return (
        <FormControl
            placeholder={placeholder}
            aria-label={label}
            value={value}
            readOnly={readOnly}
        />
    )
}

function InputField({placeholder, label, setFunction, type}) {
    type = type ? type : 'number'
    return (
        <FormControl
            placeholder={placeholder}
            aria-label={label}
            min='0'
            type={type}
            onChange={e => setFunction(e.target.value)}
        />
    )
}

function MoneyInputGroup(props) {
    let input
    if (props.readOnly) {
        input = (
            <ReadOnlyField
                placeholder={props.placeholder}
                label={props.label}
                value={props.value}
                readOnly={props.readOnly}
            />
        )
    } else {
        input = (
            <InputField
                placeholder={props.placeholder}
                label={props.label}
                setFunction={props.setFunction}
            />
        )
    }
    return (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            {input}
        </InputGroup>
    )
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
        [price, dividends]
    )
    return (
        <Row>
            <Col>
                <InputField
                    placeholder="Nome do Fii"
                    label="name"
                    setFunction={setName}
                    type='text'
                />
            </Col>
            <Col>
                <MoneyInputGroup
                    placeholder="Preço"
                    label="price"
                    setFunction={setPrice}
                />
            </Col>
            <Col>
                <MoneyInputGroup
                    placeholder="Dividendos / Proventos"
                    label="price"
                    setFunction={setDividends}
                />
            </Col>
            <Col>
                <MoneyInputGroup
                    placeholder="Magic Number"
                    label="magic_number"
                    readOnly={true}
                    value={magicNumber}
                />
            </Col>
        </Row>
    )
}

export default CalculatorLine
