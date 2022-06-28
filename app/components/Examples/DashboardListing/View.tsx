
import CustomList from 'app/components/CustomComponents/CustomList';
import styles from './styles.module.scss';

type Props = {
  data: any[],
	onClickRow: (e: any, ticket: any) => void;
}
  
const View: React.FC<Props> = ({
  data,
  onClickRow
}) => {
  
  return (
    <div className={styles.ticketsList}>
      <CustomList
				data={data}
				headers={[]}
				onClickRow={onClickRow}
				type={'Tickets'}
			/>
    </div>
  );
};

export default View;

