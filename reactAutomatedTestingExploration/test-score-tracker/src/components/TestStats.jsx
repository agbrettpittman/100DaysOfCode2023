import { useContext } from 'react'
import styled from 'styled-components'
import { TestsContext } from '../App'

const StatTitle = styled.span`
    font-weight: bold;
`

function TestStats({}) {

    const {Tests} = useContext(TestsContext)

    const TestAverage = (Tests.length) ? Tests.map(x => x.Score).reduce((a, b) => Number(a) + Number(b)) / Tests.length : "";

    return (
        <div>
            <h2>Stats</h2>
            <div>
                {TestAverage && <><StatTitle>Average: </StatTitle>{TestAverage}</>}
            </div>
        </div>
    )
}

export default TestStats