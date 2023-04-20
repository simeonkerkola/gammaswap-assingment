import styled from '@emotion/styled';
import IconEth from '../Icons/IconEth';
import IconUsdc from '../Icons/IconUsdc';
import IconStar from '../Icons/IconStar';
import IconExternalLink from '../Icons/IconExternalLink';

const PoolCardHeaderStyles = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h2 {
    font-size: 1.15rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .title {
    display: flex;
    flex-direction: column;
  }

  .links {
    margin-bottom: 2.5rem;
    font-size: 0.8125rem;
    display: flex;
    gap: 0.25rem;
    color: #969696;
    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #1c1c1c;
        transition: all 0.2s ease-in-out;
      }
    }
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
          <span>•</span>
          <a href="#">
            View on Etherscan <IconExternalLink width="10" height="10" />
          </a>
        </div>
      </div>
      <div>
        <IconStar width="20" height="20"></IconStar>
      </div>
    </PoolCardHeaderStyles>
  );
}
