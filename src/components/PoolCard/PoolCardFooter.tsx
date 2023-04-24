import styled from '@emotion/styled';
import Button from '../Button';

const PoolCardFooterStyles = styled.footer`
  display: flex;
  align-items: center;

  button {
    flex-grow: 1;
  }
`;

export default function PoolCardFooter() {
  return (
    <PoolCardFooterStyles>
      <Button large>Invest in Pool</Button>
    </PoolCardFooterStyles>
  );
}
