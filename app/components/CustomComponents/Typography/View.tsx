import styles from './styles.module.scss'

  type Props = {
    children: JSX.Element | string;
    typeValue: string;
    boldStyle: {
      fontWeight?: string;
    };
    Tag: string;
    className: any,
    color: string
  }
    
  const View: React.FC<Props> = ({children, typeValue, boldStyle, Tag, className, color = 'black'}) => {
    const CurrentTag = Tag as keyof JSX.IntrinsicElements;
    return (
      <div className={className} style={{ color: color }}>
        {typeValue === 'h1' && (
          <CurrentTag className={styles.h1} style={{color: color, ...boldStyle}}>
            {children}
          </CurrentTag>
        )}
        {typeValue === 'h2' && (
          <CurrentTag className={styles.h2} style={{color: color, ...boldStyle}}>
            {children}
          </CurrentTag>
        )}
        {typeValue === 'p' && (
          <CurrentTag className={styles.p} style={{color: color, ...boldStyle}}>
            {children}
          </CurrentTag>
        )}
        {typeValue === 'span' && (
          <CurrentTag color={color} className={styles.span} style={boldStyle}>
            {children}
          </CurrentTag>
        )}
      </div>
    );
  };
  
  export default View;
  
  