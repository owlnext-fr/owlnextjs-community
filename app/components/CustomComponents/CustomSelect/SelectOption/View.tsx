
import styles from './styles.module.scss';

type TypeEnum = 'general' | 'user';

type Props = {
  textLabel: string,
  className: string,
  type: TypeEnum,
  photo: string,
  onClick?: (e: any, option: any) => void,
  option: any
}
  
const View: React.FC<Props> = ({
  textLabel,
  className,
  type,
  photo,
  onClick,
  option
}) => {
  
  return (
    <div 
      className={[styles.selectOptionContainer, className].join(' ')}
      onClick={(e) => {
        typeof(onClick) !== 'undefined' ? onClick(e, option) : undefined
      }}
    >
      { type == 'user' &&
        <div className={styles.preOption}>
          <img src={photo} />
        </div>
      }
      <div className={styles.option}>
        {textLabel}
      </div>
      {/* <div className={styles.postOption}>

      </div> */}
    </div>
  );
};

export default View;

