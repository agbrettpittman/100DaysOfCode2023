import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import AddTest from './components/AddTest';
import TestList from './components/TestList';

const AppWrapper = styled.div`
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 50px;
`

function App() {

    const [Data, setData] = useState([])

    useEffect(getData, [])

    function getData(){
        axios.get(`https://crudcrud.com/api/${process.env.REACT_APP_API_ENDPOINT}/tests`)
        .then(x => setData(x.data))
        .catch(x => console.error(x))
    }
    

    return (
        <AppWrapper>
        <div>
            <h1>My Test Scores</h1>
            <p>By Brett Pittman</p>
        </div>
        <TestList testData={Data}/>
        <AddTest onAdd={getData}/>
        </AppWrapper>
    );
}

export default App;
