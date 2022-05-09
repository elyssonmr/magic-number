import React from 'react';

import { Card, Button } from 'react-bootstrap';

function Footer({ addItem }) {
  return (
    <Card.Footer className="clearfix">
      <div className="float-right">
        <Button onClick={addItem}>
          <i className="bi bi-plus-circle-fill" />
          {' '}
          Adicionar Linha
        </Button>
        {' '}
        <Button disabled>
          <i className="bi bi-cloud-arrow-up-fill" />
          {' '}
          Salvar
        </Button>
      </div>
    </Card.Footer>
  );
}

export default Footer;
