import CustomButton from 'app/components/CustomComponents/CustomButton';

import styles from './styles.module.scss';

type Props = {
  elements: any
}
  
const View: React.FC<Props> = ({
  elements
  
}) => {
  
  return (
    <div className={`${styles.footer} sidePadding`}>
      <div className={styles.detailsFooterContainer}>
        {elements}
      </div>
    </div>
  );
};

export default View;

