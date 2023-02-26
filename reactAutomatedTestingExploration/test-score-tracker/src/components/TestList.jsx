import React from 'react'
import styled from 'styled-components'

const MockServerData = [
    {name: "Physical Through Network Layers", score: 95, weight: 20},
    {name: "Mid Term", score: 80, weight: 30},
    {name: "Transport Though Application Network Layers", score: 90, weight: 20},
    {name: "Final Exam", score: 88, weight: 30},
]

const StyledTable = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    th, td {
        padding-left: 20px;
    }
`

const HeaderRow = styled.tr`
    background-color: rgba(var(--pri-color),1);
    color: white;
`

function TestList() {

    return (
        <StyledTable>
            <HeaderRow>
                <th>Test Name</th><th>Score</th><th>Weight</th>
            </HeaderRow>
            {MockServerData.map((test)=> (
                <tr>
                    <td>{test.name}</td>
                    <td>{test.score}</td>
                    <td>{test.weight}</td>
                </tr>
            ))}
        </StyledTable>
    )
}

export default TestList