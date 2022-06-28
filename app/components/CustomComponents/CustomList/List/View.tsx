import Cell from './Cell';
import styles from './styles.module.scss';

type Props = {
  data: Array<any>,
  onClickRow: (e: any, object: any) => void,
  selectedItem: string,
  type: string
}
  
const View: React.FC<Props> = ({
  data,
  onClickRow,
  selectedItem,
  type
}) => {
  return (
    <div className={styles.listContainer}>
      {data.map((row, index) => {
        let disabled = ''
        row.options.isDisabled ? disabled = 'disabled' : null
        return (
          <div 
            key={'listRow' + row.originalData.id}
            className={[styles.listRow, styles[disabled], (selectedItem == type + '_' + row.originalData.id ? styles.selectedRow : undefined)].join(' ')}
            onClick={(e) => {
              onClickRow(e, row.originalData)
            }}  
          >
            {row.data.map((cell: any, indexCell: number) => (
              <Cell
                key={'cell_' + indexCell}
                cell={cell}
              />
            ))}
            { row.color &&
              <div className={styles.end} style={{ background: row.color }}>

              </div>
            }
          </div>
        )
      })}
    </div>
  );
};

export default View;

