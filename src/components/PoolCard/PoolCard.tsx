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
  width: 460px;

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
  }

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
      <div className="content">
        <PoolCardHeader></PoolCardHeader>
        <PoolCardPrimaryDetails></PoolCardPrimaryDetails>
        <PoolCardReserves></PoolCardReserves>
        <PoolCardSecondaryDetails></PoolCardSecondaryDetails>
        <PoolCardFooter></PoolCardFooter>
      </div>
    </StyledPoolCard>
  );
}
