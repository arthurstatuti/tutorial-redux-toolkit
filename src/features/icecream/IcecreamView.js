import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>Number of Icecreams: {numOfIcecreams} </h2>

      <button onClick={() => dispatch(ordered())} >Order icecream</button>
      <input
        type='number'
        value={value}
        onChange={(event) => setValue(parseInt(event.target.value))}

      >
      </input>
      <button onClick={() => dispatch(restocked(value))} >Restock icecreams</button>
    </div>
  )
}
