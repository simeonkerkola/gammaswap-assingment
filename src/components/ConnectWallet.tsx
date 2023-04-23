import { useAccount } from '../context/account-context';

export default function ConnectWallet() {
  const { connect, account } = useAccount();

  return (
    <button disabled={!!account} onClick={connect}>
      connect
    </button>
  );
}
