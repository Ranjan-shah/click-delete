import React, { useState } from 'react';
import ListItem from './ListItem';
import Data from '../data.json';

const List = () => {
    console.log(Data)

    const [list,setList] = useState(Data)
    const[selected, setSelected] = useState(-1)
  return (
    <div>
        {list.map(item => <ListItem item={item} setList={setList} selected={selected} setSelected={setSelected}/>)}
        
      {/* <ListItem name={'name'} /> */}
      {/* const listItems = numbers.map((number) => */}


    </div>
  )
}

export default List;
