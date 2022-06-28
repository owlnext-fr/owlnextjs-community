
import styles from './styles.module.scss';

type Props = {
  show: boolean,
  children: React.ReactNode,
  placeholder: React.ReactNode
}
  
const View: React.FC<Props> = ({
  show,
  children,
  placeholder
}) => {
  
  return (
    <>
      { show ?
        <>
          {children}
        </>
      :
        <>
          {placeholder}
        </>
      }
    </>
  );
};

export default View;

