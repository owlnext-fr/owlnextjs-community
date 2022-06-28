import DefaultImage from 'public/assets/images/emptystate_default.svg'
import styles from './styles.module.scss';
import { ReactElement } from 'react';

type Props = {
  content: string,
  image?: ReactElement
}
  
const View: React.FC<Props> = ({
  content,
  image
}) => {
  
  return (
    <div className={styles.emptyStateContainer}>
      <div className={styles.contentContainer}>
        {content}
      </div>
      <div className={styles.imageContainer}>
        { image ?
          <>
            {image}
          </>
        :
          <>
            <DefaultImage />
          </>
        }
      </div>
    </div>
  );
};

export default View;

