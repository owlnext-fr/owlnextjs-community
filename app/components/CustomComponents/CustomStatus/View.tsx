
import styles from './styles.module.scss';

type Props = {
  cell: any
}
  
const View: React.FC<Props> = ({
  cell
}) => {
  let disabled = ''
  cell.statusType ? null : disabled = 'disabled'
  
  return (
    <div className={`${styles.statusContainer} ${styles[disabled]}`}>
      {cell.value}
    </div>
  );
};

export default View;

