import styles from './styles.module.scss';

type Props = {
  selectedDetailsSubTab: string,
  currentObject: any,
}

const View: React.FC<Props> = ({
  selectedDetailsSubTab,
  currentObject,
}) => {
  return (
    <div className={[styles.detailsBody].join(' ')}>
      
    </div>
  );
};

export default View;

  