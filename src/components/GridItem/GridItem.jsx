import React from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const GridItem = ({ data, click }) => {
  return (
    <Card
      className="grid-item"
      onClick={() => click(data.link)}
    >
      <CardContent>
        <Row>
          <Col className='text-center'>
            <Typography variant="h5" component="h2" className='text-item'>
              {data.title}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            {data.icon}
          </Col>
        </Row>
      </CardContent>
    </Card>
  )
}

export default GridItem;