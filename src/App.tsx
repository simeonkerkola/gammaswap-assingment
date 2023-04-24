import styled from '@emotion/styled';
import Button from './components/Button';
import ConnectWallet from './components/ConnectWallet';
import PerformanceRangeSelect from './components/PerformanceRangeSelect';
import PoolCard from './components/PoolCard/PoolCard';
import { AccountProvider } from './context/account-context';
import { PerformanceRangeProvider } from './context/performance-range-context';

const AppStyles = styled.div`
  max-width: 760px;
  margin: 2rem auto;

  header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  h1 {
    margin-right: auto;
  }
  main {
    display: grid;
    place-items: center;
    margin: 40px auto;
  }
`;

function App() {
  return (
    <AppStyles>
      <AccountProvider>
        <PerformanceRangeProvider>
          <header>
            <h1>Pools</h1>
            <PerformanceRangeSelect></PerformanceRangeSelect>
            <Button border>Arbitrum</Button>
            <ConnectWallet></ConnectWallet>
          </header>
          <main>
            <PoolCard></PoolCard>
          </main>
        </PerformanceRangeProvider>
      </AccountProvider>
    </AppStyles>
  );
}

export default App;
