import styled from '@emotion/styled';
import { usePerformanceRange } from '../../context/performance-range-context';

const PoolCardPrimaryDetailsStyles = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4rem;

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

  .details {
    font-size: 0.8125rem;
    color: var(--grey-3);
  }

  .percentage-change {
    color: var(--green);
    font-weight: 700;
    margin-right: 0.25rem;
  }
`;

export default function PoolCardPrimaryDetails() {
  const { performanceRange } = usePerformanceRange();

  return (
    <PoolCardPrimaryDetailsStyles>
      <article>
        <h2>Liquidity</h2>
        <div className="value">$23.00M</div>
        <div className="details">
          <span className="percentage-change">+2.38%</span>
          <span>{performanceRange.textShort} Change</span>
        </div>
      </article>
      <article>
        <h2>APR</h2>
        <div className="value">2.34%</div>
        <div className="details">
          <span>{performanceRange.textShort} Performance</span>
        </div>
      </article>
    </PoolCardPrimaryDetailsStyles>
  );
}
