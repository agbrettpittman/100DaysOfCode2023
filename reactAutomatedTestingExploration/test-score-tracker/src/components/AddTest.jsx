import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MyButton from './library/MyButton'
import { TestsContext } from '../App'

const Wrapper = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    input {
        margin: 0px 5px;
        border-radius: 5px;
        border: 1px solid black;
        padding: 3px;
    }
`

const NumberInput = styled.input`
    width: 50px;
`


function AddTest() {
    const [TestName, setTestName] = useState("")
    const [Score, setScore] = useState(0)
    const [Weight, setWeight] = useState(100)
    const {getTests} = useContext(TestsContext)

    function handleSubmit(){
        axios.post(`https://crudcrud.com/api/${process.env.REACT_APP_API_ENDPOINT}/tests`, {TestName,Score,Weight})
        .then(x => {
            getTests()
        })
        .catch(x => console.error(x))
    }

    return (
        <Wrapper>
            <label>
                Test Name:
                <input type="text" placeholder='Test Name' value={TestName} onChange={(e)=>setTestName(e.target.value)}/>
            </label>
            <label>
                Score:
                <NumberInput type="number" placeholder='score' value={Score} onChange={(e)=>setScore(e.target.value)}/>
            </label>
            <label>
                Weight:
                <NumberInput type="number" placeholder='weight' value={Weight} onChange={(e)=>setWeight(e.target.value)}/>
                <span>%</span>
            </label>
            <MyButton id="addTestButton" variant="secondary" text='Add Test' onClick={handleSubmit}/>
        </Wrapper>
    )
}

export default AddTest