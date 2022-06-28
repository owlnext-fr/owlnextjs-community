import React from 'react';

import Collapsed from './Collapsed';
import Opened from './Opened';

import styles from './styles.module.scss';

type Props = {
  pathname: string,
  isDeployed: boolean,
}

const View: React.FC<Props> = ({ 
  pathname,
  isDeployed,
}) => (
  <div className={styles.navBarContainer}>
    <Opened
      pathname={pathname}
    />
  </div>
);

View.propTypes = {
  
};

export default View;