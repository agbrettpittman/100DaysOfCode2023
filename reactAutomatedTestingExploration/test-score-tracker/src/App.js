import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import AddTest from './components/AddTest';
import TestList from './components/TestList';
import TestStats from './components/TestStats';

const AppWrapper = styled.div`
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 50px;
`

export const TestsContext = createContext({
    Tests: [],
    getTests: ()=>{}
})

function App() {

    const [Tests, setTests] = useState([])

    useEffect(getData, [])

    function getData(){
        axios.get(`https://crudcrud.com/api/${process.env.REACT_APP_API_ENDPOINT}/tests`)
        .then(x => setTests(x.data))
        .catch(x => console.error(x))
    }
    

    return (
        <TestsContext.Provider value={{Tests, getTests: getData}}>
            <AppWrapper>
                <div>
                    <h1>My Test Scores</h1>
                    <p>By Brett Pittman</p>
                </div>
                <TestList/>
                <AddTest onAdd={getData}/>
                <TestStats />
            </AppWrapper>
        </TestsContext.Provider>
    );
}

export default App;
