import styled from '@emotion/styled';

const PoolCardFooterStyles = styled.footer`
  display: flex;
  align-items: center;
  a {
    padding: 0.875rem 1rem;
    color: var(--black);
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    flex-grow: 1;
    background: var(--grey-1);
    border-radius: 12px;
  }
`;

export default function PoolCardFooter() {
  return (
    <PoolCardFooterStyles>
      <a href="#">Invest in Pool</a>
    </PoolCardFooterStyles>
  );
}
