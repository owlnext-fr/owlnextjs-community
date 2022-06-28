
import { ReactElement } from 'react';
import styles from './styles.module.scss';

type Props = {
  title: string,
  value: string | ReactElement,
  onClick: (() => void) | undefined,
  endButton: ReactElement | undefined
}
  
const View: React.FC<Props> = ({
  title,
  value,
  onClick,
  endButton
}) => {
  
  return (
    <div className={styles.detailsListItemContainer}>
      <div className={styles.title}>
        {title}
      </div>
      <div 
        className={[styles.value, (onClick ? styles.cursor : undefined)].join(' ')}
        onClick={onClick ? onClick : undefined}
      >
        {value !== null ? value : '-'}
      </div>
      <div className={styles.actions}>
        {endButton}
      </div>
    </div>
  );
};

export default View;

