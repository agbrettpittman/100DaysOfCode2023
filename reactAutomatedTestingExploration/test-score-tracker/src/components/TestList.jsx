import styled from 'styled-components'

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

function TestList({testData = []}) {  

    console.log(testData)

    return (
        <StyledTable>
            <HeaderRow>
                <th>Test Name</th><th>Score</th><th>Weight</th>
            </HeaderRow>
            {testData.map((test)=> (
                <tr>
                    <td>{test.TestName}</td>
                    <td>{test.Score}</td>
                    <td>{test.Weight}%</td>
                </tr>
            ))}
        </StyledTable>
    )
}

export default TestList