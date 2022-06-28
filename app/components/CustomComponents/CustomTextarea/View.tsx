
import styles from './styles.module.scss';

type Props = {
  value: string,
  setter: (arg: any) => void,
  className: string,
  placeholder: string,
  cols: number,
  rows: number,
  disabled: boolean,
  error: boolean;
  inputEl: any
}
  
const View: React.FC<Props> = ({
  value,
  setter,
  className,
  placeholder,
  cols,
  rows,
  disabled,
  error,
  inputEl
}) => {
  
  return (
    <div className={styles.customTextareaContainer}>
      <textarea
        rows={rows}
        cols={cols}
        className={[className, (error ? styles.error : undefined)].join(' ')}
        placeholder={placeholder}
        value={value}
        onChange={setter}
        disabled={disabled}
        ref={inputEl}
      />
    </div>
  );
};

export default View;

