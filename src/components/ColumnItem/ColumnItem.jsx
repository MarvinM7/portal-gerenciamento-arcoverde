import React from "react";

import Row from 'react-bootstrap/Row';

import TextField from '@material-ui/core/TextField';

const ColumnItem = ({ data, onChange }) => {
  return (
    <Row className="top-buffer">
      {data.type === 'text'?
        <TextField
          id={data.id}
          label={data.label}
          value={data.value}
          onChange={(e) => onChange({
            data,
            value: e.target.value
          })}
        />
      :null
      }
      
    </Row>
  )
}

export default ColumnItem;