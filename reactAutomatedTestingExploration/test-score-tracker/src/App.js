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
  return (
    <AppWrapper>
      <div>
        <h1>My Test Scores</h1>
        <p>By Brett Pittman</p>
      </div>
      <TestList />
      <AddTest/>
    </AppWrapper>
  );
}

export default App;
