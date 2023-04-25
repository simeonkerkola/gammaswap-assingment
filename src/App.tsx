import styled from '@emotion/styled';
import Button from './components/Button';
import ConnectWallet from './components/ConnectWallet';
import PerformanceRangeSelect from './components/PerformanceRangeSelect';
import PoolCard from './components/PoolCard/PoolCard';
import { AccountProvider } from './context/account-context';
import { PerformanceRangeProvider } from './context/performance-range-context';
import IconArbitrum from './components/icons/IconArbitrum';

const AppStyles = styled.div`
  max-width: 60rem;
  margin: 2rem auto;

  .app-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
  }

  .pools-section-header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 2rem;
  }

  main {
    display: grid;
    place-items: center;
    /* margin: 40px auto; */
  }

  h1 {
    margin-right: auto;
  }
`;

function App() {
  return (
    <AppStyles>
      <AccountProvider>
        <header className="app-header">
          <ConnectWallet></ConnectWallet>
        </header>
        <PerformanceRangeProvider>
          <main>
            <section>
              <header className="pools-section-header">
                <h1>Pools</h1>
                <PerformanceRangeSelect></PerformanceRangeSelect>
                <Button
                  border
                  prefixIcon={
                    <IconArbitrum
                      width="1.25rem"
                      height="1.25rem"
                    ></IconArbitrum>
                  }
                >
                  Arbitrum
                </Button>
              </header>
              <PoolCard></PoolCard>
            </section>
          </main>
        </PerformanceRangeProvider>
      </AccountProvider>
    </AppStyles>
  );
}

export default App;
