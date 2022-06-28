import Link from 'next/link';
import { Trads } from 'app/types/global';
import styles from './styles.module.scss';

type Props = {
  handleDisconnect: () => void,
  trads: Trads
}
  
const View: React.FC<Props> = ({
  handleDisconnect,
  trads
}) => {
  
  return (
    <div className={styles.disconnectLinkContainer}>
      <Link
        href='/logout'
      >
        {trads.disconnect}
      </Link>
    </div>
  );
};

export default View;

