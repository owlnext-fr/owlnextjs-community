
import styles from './styles.module.scss';

type Props = {
  onClick: () => void,
  variant: string
}
  
const View: React.FC<Props> = ({
  onClick,
  variant
}) => {
  
  return (
    <div 
      className={[styles.customPlusButtonContainer, styles[`variant_${variant}`]].join(' ')}
      onClick={onClick}
    >
      +
    </div>
  );
};

export default View;

