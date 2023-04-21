import styled from '@emotion/styled';

const PoolCardReservesStyles = styled.section`
  display: flex;
  flex-direction: column;

  /* TODO: Duplicate and check font-size */
  h2 {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--grey-3);
    margin-bottom: 0.5rem;
  }

  .pool-token-amounts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 700;

    .symbol {
      margin-left: 0.25rem;
      color: var(--grey-3);
    }
  }

  .pool-tokens-weight-bar {
    display: flex;
    height: 0.5rem;
    border-radius: 999px;
    overflow: hidden;
    margin-bottom: 0.625rem;

    .pool-token-weight {
      flex-grow: 1;
    }

    .token-1 {
      background: linear-gradient(
        270deg,
        #141414 0%,
        rgba(20, 20, 20, 0.24) 100%
      );
    }

    .token-2 {
      background: linear-gradient(
        270deg,
        rgba(38, 161, 123, 0.24) 0%,
        #26a17b 100%
      );
    }
  }
`;

export default function PoolCardReserves() {
  return (
    <PoolCardReservesStyles>
      <h2>Reserves</h2>
      <div className="pool-tokens-weight-bar">
        <div className="pool-token-weight token-1"></div>
        <div className="pool-token-weight token-2"></div>
      </div>
      <div className="pool-token-amounts">
        <div>
          6598.00 <span className="symbol">ETH</span>
        </div>
        <div>
          11,581,900
          <span className="symbol">USDC</span>
        </div>
      </div>
    </PoolCardReservesStyles>
  );
}
