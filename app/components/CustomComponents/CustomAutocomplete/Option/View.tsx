import { AutoCompleteOption } from 'app/types/global';
import styles from './styles.module.scss';

type Props = {
  label: string,
  onClickOption: (arg: any) => void,
  option: AutoCompleteOption,
  isPlaceholder: boolean
}
  
const View: React.FC<Props> = ({
  label,
  onClickOption,
  option,
  isPlaceholder
}) => {
  return (
    <>
      { !option.disabled &&
        <div 
          className={[styles.option, (isPlaceholder && styles.placeholder)].join(' ')}
          onClick={ () => {
            if (!isPlaceholder) {
              onClickOption(option)
            }
          }}
        >
          { typeof(option.color) !== 'undefined' &&
            <div style={{ background: option.color }} className={styles.color}>

            </div>
          }
          <div className={styles.label}>
            {label}
          </div>
        </div>
      }
    </>
  );
};

export default View;

