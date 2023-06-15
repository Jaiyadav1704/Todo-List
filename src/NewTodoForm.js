import { useState } from "react";

export default function NewTodoForm( {proping}) {
    const [newItem, setnewItem] = useState("");

    function handelSubmit(e) {
        e.preventDefault()
        if(newItem === "") return
    
        proping(newItem)
    
        setnewItem("");
      }
  return (
    <form onSubmit={handelSubmit} className="new-item-form">
      <div className="from-row">
        <label htmfor="item"> New item </label>
        <br />
        <input
          value={newItem}
          onChange={(e) => setnewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn"> Add </button>
    </form>
  );
}
