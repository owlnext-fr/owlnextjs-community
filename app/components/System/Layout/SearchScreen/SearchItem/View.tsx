
  import useTranslation from 'hooks/useTranslation';
import styles from './styles.module.scss';

  type Props = {
    onClickItem: () => void;
  }
    
  const View: React.FC<Props> = ({
    onClickItem
  }) => {
    const {t} = useTranslation()
    return (
      <div className={styles.searchitem} onClick={onClickItem}>
        
      </div>
    );
  };
  
  export default View;
  
  