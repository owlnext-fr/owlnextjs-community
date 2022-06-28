
import styles from './styles.module.scss';

type Props = {
  type: string,
  content: string,
  onClick?: () => void,
  disabled: boolean,
  className: string,
  link: string
}
  
const View: React.FC<Props> = ({
  type,
  content,
  onClick,
  disabled,
  className,
  link
}) => {
  
  return (
    <div 
      className={[styles.customButtonContainer, styles[type], className, (disabled ? styles.disabled : undefined)].join(' ')}
      onClick={!disabled ? onClick : () => {}}
    >
      { link !== '' ?
        <a href={link} rel="noreferrer" target='_blank'>
          { type == 'dottedCta' &&
            <div className={styles.plusIcon}>+</div>
          }
          <div className={styles.text}>
            {content}
          </div>
        </a>
      :
        <>
          { type == 'dottedCta' &&
            <div className={styles.plusIcon}>+</div>
          }
          <div className={styles.text}>
            {content}
          </div>
        </>
      }
      
    </div>
  );
};

export default View;