import React, {useState} from "react"

export const TodoList = () => {
  const [text, textUpdate] = useState("");
  const [list, listUpdate] = useState([]);
  return (
    <div style={{display: "grid", gridTemplateColums: "300px 300px", justifyItems: "center", gap: "10px"}}>
      <div>
        <h3>TodoList</h3>
        <ul>
          {list.map((text => <li>{text}</li>))}
        </ul>
        <div>
          <input type="text" value={text} onChange={() => textUpdate(e.target.value)}/>
          <button onClick={()=> {
            listUpdate([...list, ...text])
            textUpdate("")
          }}> add text </button>
        </div>
        <div>
          <h3> Done </h3>
          <ul></ul>
        </div>
      </div>
    </div>
  )
}