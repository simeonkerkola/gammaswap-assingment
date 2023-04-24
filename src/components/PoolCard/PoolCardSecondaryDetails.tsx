import styled from '@emotion/styled';
import { usePerformanceRange } from '../../context/performance-range-context';

const PoolCardSecondaryDetailsStyles = styled.section`
  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  /* TODO: duplicate */
  dt {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--grey-3);
  }

  dd {
    text-align: end;
    font-weight: 700;
  }
`;

export default function PoolCardSecondaryDetails() {
  const { performanceRange } = usePerformanceRange();
  return (
    <PoolCardSecondaryDetailsStyles>
      <dl>
        <dt>{performanceRange.textShort} Volume</dt>
        <dd> $15,00M</dd>

        <dt>{performanceRange.textShort} Fees</dt>
        <dd> $50,00</dd>
      </dl>
    </PoolCardSecondaryDetailsStyles>
  );
}
