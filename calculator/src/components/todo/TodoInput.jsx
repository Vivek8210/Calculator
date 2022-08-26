

import React from 'react'

const TodoInput = () => {
  const[title,setTitle]=React.useState('');

  const  handleAdd=()=>{
      
  }
  return (
  <>
    <div>TodosInput

<input type="text" placeholder='ADD NEW TODO'  value={title}  onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div>
    <button onClick={handleAdd}>Add Todo</button>
</div>
  </>
  )
}

export default TodoInput