import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${({background}) => background };
    border: 0px;
    border-radius: 10px;
    padding: 5px 10px;
    color: ${({color}) => color };
    height: fit-content;
`

function MyButton({text = "", variant = "primary", ...buttonProps}) {
    
    let configuredStyle = {
        color: "white",
        background: "rgba(var(--pri-color),1)"
    }

    switch (variant) {

        case "primary":
            break;

        case "secondary":
            configuredStyle = {
                ...configuredStyle,
                color: "white",
                background: "rgba(var(--sec-color),1)"
            }
            break;
        
        case "red":
            configuredStyle = {
                ...configuredStyle,
                color: "white",
                background: "rgba(var(--red-color),1)"
            }
            break;
    
        default:
            break;
    }

    return (
        <StyledButton {...{ ...configuredStyle, ...buttonProps}}>{text}</StyledButton>
    )
}

export default MyButton