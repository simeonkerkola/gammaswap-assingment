import styled from '@emotion/styled';
import IconEth from '../Icons/IconEth';
import IconUsdc from '../Icons/IconUsdc';
import IconStar from '../Icons/IconStar';
import IconExternalLink from '../Icons/IconExternalLink';
import { useAccount } from '../../context/account-context';

const PoolCardHeaderStyles = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .title {
    display: flex;
    flex-direction: column;
  }

  .links {
    font-size: 0.8125rem;
    display: flex;
    gap: 0.25rem;
    color: var(--grey-3);
    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--black);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .dot {
    color: var(--grey-2);
  }

  .icons {
    display: flex;
    margin-bottom: 1.25rem;

    svg:not(:first-of-type) {
      margin-left: -3px;
    }
  }
`;

export default function PoolCardHeader() {
  const { addFavouritePool } = useAccount();
  function handleStarClick(): React.MouseEventHandler<HTMLButtonElement> {
    console.log('click');
    addFavouritePool('0xasdfasdfasdf');
  }

  return (
    <PoolCardHeaderStyles>
      <div className="title">
        <div className="icons">
          <IconEth width="40" height="40"></IconEth>
          <IconUsdc width="40" height="40"></IconUsdc>
        </div>
        <h2>ETH / USDC</h2>
        <div className="links">
          <a href="#">
            Uniswap v2 <IconExternalLink width="10" height="10" />
          </a>
          <span className="dot">•</span>
          <a href="#">
            View on Etherscan <IconExternalLink width="10" height="10" />
          </a>
        </div>
      </div>
      <div>
        <button onClick={handleStarClick}>
          <IconStar width="20" height="20"></IconStar>
        </button>
      </div>
    </PoolCardHeaderStyles>
  );
}
