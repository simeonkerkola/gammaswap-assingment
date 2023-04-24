import { useAccount } from '../context/account-context';
import Button from './Button';

export default function ConnectWallet() {
  const { connect, account } = useAccount();

  return (
    <Button primary disabled={!!account} onClick={connect}>
      <span>{account ? account.slice(0, 10) : 'Connect Wallet'}</span>
    </Button>
  );
}
