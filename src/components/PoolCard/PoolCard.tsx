import styled from '@emotion/styled';
import PoolCardFooter from './PoolCardFooter';
import PoolCardHeader from './PoolCardHeader';
import PoolCardPrimaryDetails from './PoolCardPrimaryDetails';
import PoolCardReserves from './PoolCardReserves';
import PoolCardSecondaryDetails from './PoolCardSecondaryDetails';

const StyledPoolCard = styled.section`
  background: var(--white);
  border: 1px solid var(--grey-2);
  border-radius: 14px;
  box-shadow: 0px 2px 4px 2px var(--grey-2);
  padding: 2rem;
  min-width: 328px;

  table {
    width: 100%;
  }

  caption {
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--black);
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.75rem;
    color: var(--grey-3);
  }
`;

export default function PoolCard() {
  return (
    <StyledPoolCard>
      <PoolCardHeader></PoolCardHeader>
      <PoolCardPrimaryDetails></PoolCardPrimaryDetails>
      <PoolCardReserves></PoolCardReserves>
      <PoolCardSecondaryDetails></PoolCardSecondaryDetails>
      <PoolCardFooter></PoolCardFooter>
    </StyledPoolCard>
  );
}
