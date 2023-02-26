import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: rgba(var(--sec-color),1);
    border: 0px;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
    height: fit-content;
`

function MyButton({text = "", ...buttonProps}) {
  return (
    <StyledButton {...buttonProps}>{text}</StyledButton>
  )
}

export default MyButton