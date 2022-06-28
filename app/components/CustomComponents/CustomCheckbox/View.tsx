
import styles from './styles.module.scss';

type Props = {
  isChecked: boolean,
  setIsChecked: (arg: boolean) => void,
  label: string | React.ReactNode,
  className: string,
  error: boolean,
  customHandle: any,
  direction: 'row' | 'column'
}
  
const View: React.FC<Props> = ({
  isChecked,
  setIsChecked,
  label,
  className,
  error,
  customHandle,
  direction
}) => {
  
  return (
    <div className={[styles.customcheckbox, (direction == 'column' ? styles.column : undefined), ((error && !isChecked) ? styles.error : undefined), className].join(' ')}>
      <label>
        {label}
        <input
          checked={isChecked}
          type="checkbox"
          onChange={customHandle ? customHandle :
            () => {
              setIsChecked(!isChecked)
            }
          }
        />
        <span className={styles.checkmark}></span>
        <span
          className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
          aria-hidden="true"
        />
      </label>
    </div>
  );
};

export default View;

