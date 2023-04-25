import styled from '@emotion/styled';
import PoolCardFooter from './PoolCardFooter';
import PoolCardHeader from './PoolCardHeader';
import PoolCardPrimaryDetails from './PoolCardPrimaryDetails';
import PoolCardReserves from './PoolCardReserves';
import PoolCardSecondaryDetails from './PoolCardSecondaryDetails';

const StyledPoolCard = styled.article`
  background: var(--white);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 2rem;
  width: 28.75rem;

  .card-content {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
  }
`;

export default function PoolCard() {
  return (
    <StyledPoolCard>
      <div className="card-content">
        <PoolCardHeader></PoolCardHeader>
        <PoolCardPrimaryDetails></PoolCardPrimaryDetails>
        <PoolCardReserves></PoolCardReserves>
        <PoolCardSecondaryDetails></PoolCardSecondaryDetails>
        <PoolCardFooter></PoolCardFooter>
      </div>
    </StyledPoolCard>
  );
}
