
import styles from './styles.module.scss';

type Props = {
  data: Array<any>
}
  
const View: React.FC<Props> = ({
  data
}) => {
  
  return (
    <div className={styles.headContainer}>
      { data.map((tile: any, index: number) => (
        <div style={{ width: tile.width }} key={'head_' + index} className={styles.headCell}>
          { tile.label }
        </div>
      ))}
    </div>
  );
};

export default View;

