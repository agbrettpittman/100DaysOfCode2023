import { useContext } from 'react'
import styled from 'styled-components'
import { TestsContext } from '../App'
import MyButton from './library/MyButton'
import axios from 'axios'

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
    
    const {Tests, getTests} = useContext(TestsContext)

    function deleteTest(testId){
        axios.delete(`https://crudcrud.com/api/${process.env.REACT_APP_API_ENDPOINT}/tests/${testId}`)
        .then(x => {
            getTests()
        })
        .catch(x => console.error(x))
    }

    return (
        <StyledTable>
            <HeaderRow>
                <th>Test Name</th><th>Score</th><th>Weight</th><th></th>
            </HeaderRow>
            {Tests.map((test)=> (
                <tr>
                    <td>{test.TestName}</td>
                    <td>{test.Score}</td>
                    <td>{test.Weight}%</td>
                    <td><MyButton text="Delete" variant='red' onClick={()=>deleteTest(test._id)}/></td>
                </tr>
            ))}
        </StyledTable>
    )
}

export default TestList