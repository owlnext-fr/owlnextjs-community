
import styles from './styles.module.scss';

type TypeEnum = 'classic' | 'special'

type Props = {
  isChecked: boolean
  onClickFunction: () => void,
  type: TypeEnum
}
  
const View: React.FC<Props> = ({
  isChecked,
  onClickFunction,
  type
}) => {
  
  return (
    <div className={styles.customSwitchContainer}>
      <label className={[styles.switch, (type == 'classic' ? styles.classic : undefined)].join(' ')}>
        <input type="checkbox" checked={isChecked} onClick={onClickFunction} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default View;