import styled from '@emotion/styled';

const PoolCardPrimaryDetailsStyles = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4rem;

  /* TODO: duplicate */
  h2 {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--grey-3);
  }

  .value {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  /* TODO: duplicate */
  .details {
    font-size: 0.8125rem;
    color: var(--grey-3);
  }

  .percentage-change {
    color: var(--green);
    font-weight: 700;
  }
`;

export default function PoolCardPrimaryDetails() {
  return (
    <PoolCardPrimaryDetailsStyles>
      <article>
        <h2>Liquidity</h2>
        <div className="value">$23.00M</div>
        <div className="details">
          <span className="percentage-change">+2.38%</span>{' '}
          <span>24h Change</span>
        </div>
      </article>
      <article>
        <h2>APR</h2>
        <div className="value">2.34%</div>
        <div className="details">
          <span>24h Performance</span>
        </div>
      </article>
    </PoolCardPrimaryDetailsStyles>
  );
}
