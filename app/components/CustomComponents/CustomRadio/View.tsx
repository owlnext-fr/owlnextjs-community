
import styles from './styles.module.scss';

type Option = {
  id: number,
  label: string,
  checked: boolean
}

type Props = {
  options: Array<Option>,
  handleClick: (id: number) => void
}
  
const View: React.FC<Props> = ({
  options,
  handleClick
}) => {
  
  return (
    <form>
      { options.map((option) => (
        <label className={styles.container}>
          <input type="radio" checked={option.checked} onClick={ () => { handleClick(option.id) }} name="radio" />
          <span className={styles.checkmark}></span>
          {option.label}
        </label>
      ))}
    </form>
  );
};

export default View;

