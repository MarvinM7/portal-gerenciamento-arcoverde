import React from 'react';

import GridItem from '../GridItem/GridItem';

const Grid = ({ data, click }) => {
  return (
    <div className="grid">
      {data.map(item => {
        return (
          <GridItem
            key={item.id}
            data={item}
            click={click}
          />
        )
      })}
    </div>
  )
}

export default Grid;