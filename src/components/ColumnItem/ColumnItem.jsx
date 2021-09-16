import React from "react";

import Row from 'react-bootstrap/Row';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
          inputProps={{
            readOnly: data.readOnly ? data.readOnly : false,
          }}
        />
      :data.type === 'select'?
        <FormControl>
          <InputLabel id={`${data.id}-label`}>{data.label}</InputLabel>
          <Select
            id={data.id}
            value={data.value}
            onChange={(e) => onChange({
              data,
              value: e.target.value
            })}
            inputProps={{
              readOnly: data.readOnly ?? false,
            }}
            autoWidth
          >
            <MenuItem value={''}>
              Selecionar item
            </MenuItem>
            {data.options.map(item => {
              return (
                <MenuItem
                  key={item.id}
                  value={item.id}
                >
                  {item.nome}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      :data.type === 'date'?
        <TextField
          id={data.id}
          label={data.label}
          value={data.value}
          type="date"
          onChange={(e) => onChange({
            data,
            value: e.target.value
          })}
          inputProps={{
            readOnly: data.readOnly ? data.readOnly : false,
          }}
          InputLabelProps={{
            shrink: true
          }}
        />
      :
        null
      }
    </Row>
  )
}

export default ColumnItem;