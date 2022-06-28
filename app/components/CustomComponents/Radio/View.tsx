import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  checked: boolean;
  onClick: () => void;
  children: ReactNode
}
  
const View: React.FC<Props> = ({checked, onClick, children}) => {
  
  return (
    <div className={styles.container} onClick={onClick}>
      <div
        className={[styles.radio, checked ? styles.checked : ''].join(' ')}
      />
      <div className={styles.right}>
        {children}
      </div>
    </div>
  );
};

export default View;
  
  