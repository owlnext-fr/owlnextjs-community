import Typography from 'app/components/CustomComponents/Typography';
import Head from './Head';
import List from './List';
import AddIcon from '@mui/icons-material/Add';
import styles from './styles.module.scss';

type Props = {
  data: Array<any>,
  headers: Array<any>,
  hasHeader: boolean,
  onClickRow: (e: any, object: any) => void,
  title?: string,
  handleClickPlus?: (() => void) | null,
  selectedItem: string,
  type: string
}
  
const View: React.FC<Props> = ({
  data,
  headers,
  hasHeader,
  onClickRow,
  title = '',
  handleClickPlus,
  selectedItem,
  type
}) => {
  
  return (
    <div className={styles.listContainer}>
      { title !== '' &&
        <Typography
          type={'h2'}
          bold={true}
        >
          {title}
        </Typography>
      }
      { handleClickPlus !== null &&
        <AddIcon
          className={styles.plusIcon}
          onClick={handleClickPlus}
        />
      }
      { hasHeader &&
        <Head
          data={headers}
        />
      }
      <List
        data={data}
        onClickRow={onClickRow}
        selectedItem={selectedItem}
        type={type}
      />
    </div>
  );
};

export default View;