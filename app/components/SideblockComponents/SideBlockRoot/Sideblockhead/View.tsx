
import { ReactChild } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactChild
}
  
const View: React.FC<Props> = ({
  children
}) => {
  
  return (
    <div className={styles.sideblockhead}>
      {children}
    </div>
  );
};

export default View;
  
  