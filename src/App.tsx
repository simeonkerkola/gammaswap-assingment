import styled from '@emotion/styled';
import ConnectWallet from './components/ConnectWallet';
import PerformanceRangeSelect from './components/PerformanceRangeSelect';
import PoolCard from './components/PoolCard/PoolCard';
import { AccountProvider } from './context/account-context';
import { PerformanceRangeProvider } from './context/performance-range-context';

const Main = styled.main`
  display: grid;
  place-items: center;
  margin: 40px auto;
`;

function App() {
  return (
    <AccountProvider>
      <PerformanceRangeProvider>
        <Main>
          <div>
            <h1>Pools</h1>
            <ConnectWallet></ConnectWallet>
            <PerformanceRangeSelect></PerformanceRangeSelect>
            <span>Arbitrum</span>
          </div>
          <PoolCard></PoolCard>
        </Main>
      </PerformanceRangeProvider>
    </AccountProvider>
  );
}

export default App;
