import styled from '@emotion/styled';
import PoolCard from './components/PoolCard/PoolCard';

const Main = styled.main`
  display: grid;
  place-items: center;
  margin: 40px auto;
`;

function App() {
  return (
    <Main>
      <div>
        <h1>Pools</h1>
        <div>
          Performance Range <span>i</span>
          <select name="range" id="range">
            <option value="24h">24h</option>
            <option value="7-days">7 days</option>
            <option value="30-days">30 days</option>
            <option value="3-months">3 months</option>
            <option value="6-months">6 months</option>
            <option value="year">year</option>
          </select>
          <span>Arbitrum</span>
        </div>
      </div>
      <PoolCard></PoolCard>
    </Main>
  );
}

export default App;
