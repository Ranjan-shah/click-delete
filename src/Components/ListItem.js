import React from "react";
import List from "./List";
import "./compo.css";
import { useState } from "react";

const ListItem = ({ item, setList ,selected, setSelected}) => {
  return (
    <div className="list" onClick={()=>{
        if( selected === item.id){
            setSelected(-1)
        }else{
            setSelected(item.id)
        }
        
        }}>
      <h1>{item?.name}</h1>
      
      {selected===item.id && <h2>{item?.detail}</h2>}
        
      <div
        className="cross"
        onClick={() => {
          setList((list) => list.filter((i) => i?.id !== item.id));
        }}
      >
        ❌
      </div>
    </div>
  );
};

export default ListItem;
