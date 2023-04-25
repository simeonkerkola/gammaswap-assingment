import styled from '@emotion/styled';
import IconEth from '../Icons/IconEth';
import IconUsdc from '../Icons/IconUsdc';
import IconExternalLink from '../Icons/IconExternalLink';
import PoolCardFavouriteBtn from './PoolCardFavouriteBtn';
import { FavouritePoolsProvider } from '../../context/favourite-pools-context';
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

  .icon-link {
    width: 0.625rem;
    height: 0.625rem;
  }

  .favourite-btn {
    align-self: flex-start;
  }
`;

export default function PoolCardHeader() {
  const { account } = useAccount();

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
            Uniswap v2 <IconExternalLink className="icon-link" />
          </a>
          <span className="dot">•</span>
          <a href="#">
            View on Etherscan <IconExternalLink className="icon-link" />
          </a>
        </div>
      </div>

      <FavouritePoolsProvider account={account}>
        <PoolCardFavouriteBtn
          className="favourite-btn"
          poolId="0xBADA55"
        ></PoolCardFavouriteBtn>
      </FavouritePoolsProvider>
    </PoolCardHeaderStyles>
  );
}
