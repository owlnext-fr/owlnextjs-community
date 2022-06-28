
import styles from './styles.module.scss';

type Props = {
  cell: any
}
  
const View: React.FC<Props> = ({
  cell
}) => {
  
  return (
    <div className={styles.badgeContainer}>
      <div style={{ backgroundColor: cell.color }} className={styles.colorBit}>
        &nbsp;
      </div>
      <div className={styles.text}>
        { cell.value }
      </div>
    </div>
  );
};

export default View;

