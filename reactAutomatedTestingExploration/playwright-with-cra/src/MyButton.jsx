import React, { useState } from 'react'

function MyButton() {
    const [Value, setValue] = useState(0)
  return (
    <button onClick={()=>setValue(Value + 1)}>My Button {Value}</button>
  )
}

export default MyButton