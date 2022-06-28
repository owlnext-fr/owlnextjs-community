import styles from './styles.module.scss';

type Props = {
  pathname: string;
  currentRole: "ONLINE" | "DATAADMIN" | "FREEMIUM"
}
  
const View: React.FC<Props> = ({
  pathname,
  currentRole
}) => {
  
  return (
    <div className={styles.collapsedContainer}>
    </div>
  );
};

export default View;