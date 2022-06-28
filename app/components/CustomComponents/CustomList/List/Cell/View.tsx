import CustomBadge from 'app/components/CustomComponents/CustomBadge';
import CustomStatus from 'app/components/CustomComponents/CustomStatus';
import styles from './styles.module.scss';

type Props = {
  cell: any
}

const View: React.FC<Props> = ({
  cell
}) => {
  return (
    <div 
      className={[styles.cellContainer, styles[`cell${cell.width}`]].join(' ')}
      onClick={(e) => { 
        if(typeof(cell.onClickCell) !== 'undefined') {
          e.stopPropagation()
          cell.onClickCell()
        }
      }}
    >
      {cell.cellType == 'text' &&
        <>
          { cell.icon &&
            <span className={styles.icon}>
              { cell.icon }
            </span>
          }
          { cell.value ?
            <span>
              { cell.value }
            </span>
          :
            <span>
              -
            </span>
          }
        </>
      }
      { cell.cellType == 'badge' &&
        <CustomBadge
          cell={cell}
        />
      }
      { cell.cellType == 'status' &&
        <CustomStatus
          cell={cell}
        />
      }
     {cell.cellType === 'jsx' && 
      (
        <>
          {cell.value}
        </>
      )}
      {cell.cellType === 'badgeTopRight' &&
        (
          <div style={{ color: cell.color }} className={styles.badgeTopRight}>
            {cell.icon}
          </div>
        )
      }
    </div>
  );
};

export default View;

