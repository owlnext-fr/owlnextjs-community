import Loader from 'app/components/CustomComponents/CustomLoading';
import CustomList from 'app/components/CustomComponents/CustomList';
import React from 'react';
import SearchItem from './SearchItem';
import styles from './styles.module.scss';

type Props = {
  loadingLayoutSearch: boolean;
  layoutSearchList: any[];
  formatList: any,
  onClickRow: (e: React.SyntheticEvent , object: any) => void;
}
  
const View: React.FC<Props> = ({
  loadingLayoutSearch,
  layoutSearchList,
  formatList,
  onClickRow
}) => {
  
  return (
    <div className={styles.searchscreen}>
      {loadingLayoutSearch ? (
        <div className={styles.loader}>
          <Loader size="small"/>
        </div>
      ) : (
        <CustomList
          data={formatList.data}
          headers={formatList.headers}
          onClickRow={onClickRow}
          type={'Patient'}
        />
      )}
    </div>
  );
};

export default View;

